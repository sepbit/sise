/**
 * @licstart  The following is the entire license notice for the
 * JavaScript code in this page.
 *
 * Sise - Share on a dIstributed Social nEtwork
 * Copyright (C) 2019  Sepbit
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 */
/* global location */

const sise = {
  image: 'https://unpkg.com/@sepbit/sise/assets/images',
  buttonStyle: 'style="cursor: pointer; margin-right: 5px; margin-top: 10px; height: 45px;"',
  shareDiaspora: function () {
    this.call('/bookmarklet?title=' + encodeURI(document.title) + '&url=' + encodeURI(location.href))
  },
  shareGnuSocial: function () {
    this.call('/notice/new?status_textarea=' + encodeURI(document.title) + ' - ' + encodeURI(location.href))
  },
  shareHubzilla: function () {
    this.call('/rpost?title=' + encodeURI(document.title) + '&url=' + encodeURI(location.href))
  },
  shareMastodon: function () {
    this.call('/share?text=' + encodeURI(document.title) + ' - ' + encodeURI(location.href))
  },
  call: function (link) {
    this.instance = document.getElementById('siseInstance').value
    if (this.instance.length === 0) {
      document.getElementById('siseError').innerHTML = '<p style="color: red;">Enter the instance domain</p>'
      return
    }
    if (this.instance.length <= 5) {
      document.getElementById('siseError').innerHTML = '<p style="color: orange;">Very short instance domain</p>'
      return
    }
    this.instance = this.instance.replace('http://', '').replace('https://', '')
    document.getElementById('siseError').innerHTML = ''
    window.open('https://' + this.instance + link, '_blank', 'height=600,width=450')
  }
}

document.write('<p>https:// <input type="text" placeholder="mastodon.social" ' +
  'id="siseInstance" required /></p>' +
  '<div id="siseError"></div>' +
  '<p>' +
    '<img ' + sise.buttonStyle + ' src="' + sise.image + '/diaspora.png"' +
      'alt="diaspora*" title="diaspora*" id="siseDiaspora" /> ' +
    '<img ' + sise.buttonStyle + ' src="' + sise.image + '/friendica.png" ' +
      'alt="Friendica" title="Friendica" id="siseFriendica" /> ' +
    '<img ' + sise.buttonStyle + ' src="' + sise.image + '/gnusocial.png" ' +
      'alt="GNU Social" title="GNU Social" id="siseGnusocial" /> ' +
    '<img ' + sise.buttonStyle + ' src="' + sise.image + '/hubzilla.png"' +
      'alt="Hubzilla" title="Hubzilla" id="siseHubzilla" /> ' +
    '<img ' + sise.buttonStyle + ' src="' + sise.image + '/mastodon.png" ' +
      'alt="Mastodon" title="Mastodon" id="siseMastodon" /> ' +
    '<img ' + sise.buttonStyle + ' src="' + sise.image + '/socialhome.png" ' +
      'alt="Socialhome" title="Socialhome" id="siseSocialhome" /> ' +
  '</p>')

/**
 * Auto load
 */
window.addEventListener('load', function () {
  /**
   * Click
   */
  document.getElementById('siseDiaspora').addEventListener('click', function () {
    sise.shareDiaspora()
  })

  document.getElementById('siseFriendica').addEventListener('click', function () {
    sise.shareDiaspora()
  })

  document.getElementById('siseGnusocial').addEventListener('click', function () {
    sise.shareGnuSocial()
  })

  document.getElementById('siseHubzilla').addEventListener('click', function () {
    sise.shareHubzilla()
  })

  document.getElementById('siseMastodon').addEventListener('click', function () {
    sise.shareMastodon()
  })

  document.getElementById('siseSocialhome').addEventListener('click', function () {
    sise.shareDiaspora()
  })
})
