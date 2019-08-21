/**
 * @source: https://notabug.org/sepbit/sise
 *
 * @licstart  The following is the entire license notice for the
 * JavaScript code in this page.
 *
 * Sise - Share on a dIstributed Social nEtwork
 * Copyright (C) 2019  SEPBIT
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
 *
 * ECMAScript version 6
 *
 * @author    Vitor Guia <contato@vitor.guia.nom.br>
 * @copyright 2019 SEPBIT
 * @license   GPL-3.0-or-later
 * @see       {@link https://notabug.org/sepbit/sise|Repository of Sise}
 */
/* global location */

const sise = {
  errorEmpty: function () {
    return '<p style="color: red;">Enter the instance domain</p>'
  },
  errorSize: function () {
    return '<p style="color: orange;">Very short instance domain</p>'
  },
  view: function () {
    return '<p>https:// <input type="text" placeholder="mastodon.social" ' +
      'id="siseInstance" required /></p>' +
      '<div id="siseError"></div>' +
      '<p>' +
        '<img style="' + this.buttonStyle + '" src="' + this.image + '/diaspora.png"' +
          'alt="diaspora*" title="diaspora*" height="45px" id="siseDiaspora" /> ' +
        '<img style="' + this.buttonStyle + '" src="' + this.image + '/friendica.png" ' +
          'alt="Friendica" title="Friendica" height="45px" id="siseFriendica" /> ' +
        '<img style="' + this.buttonStyle + '" src="' + this.image + '/gnusocial.png" ' +
          'alt="GNU Social" title="GNU Social" height="45px" id="siseGnusocial" /> ' +
        '<img style="' + this.buttonStyle + '" src="' + this.image + '/hubzilla.png"' +
          'alt="Hubzilla" title="Hubzilla" height="45px" id="siseHubzilla" /> ' +
        '<img style="' + this.buttonStyle + '" src="' + this.image + '/mastodon.png" ' +
          'alt="Mastodon" title="Mastodon" height="45px" id="siseMastodon" /> ' +
        '<img style="' + this.buttonStyle + '" src="' + this.image + '/socialhome.png" ' +
          'alt="Socialhome" title="Socialhome" height="45px" id="siseSocialhome" /> ' +
      '</p>'
  },
  buttonStyle: 'cursor: pointer; margin-bottom: 3px; margin-left: 1px;' +
  'margin-right: 1px; margin-top: 3px;',
  shareDiaspora: function () {
    this.call('/bookmarklet?title=' + this.title + '&url=' + this.href)
  },
  shareGnuSocial: function () {
    this.call('/notice/new?status_textarea=' + this.title + ' - ' + this.href)
  },
  shareHubzilla: function () {
    this.call('/rpost?title=' + this.title + '&url=' + this.href)
  },
  shareMastodon: function () {
    this.call('/share?text=' + this.title + ' - ' + this.href)
  },
  call: function (link) {
    this.instance = document.getElementById('siseInstance').value
    if (this.instance.length === 0) {
      document.getElementById('siseError').innerHTML = this.errorEmpty()
      return
    }
    if (this.instance.length <= 5) {
      document.getElementById('siseError').innerHTML = this.errorSize()
      return
    }
    this.instance = this.instance.replace('http://', '').replace('https://', '')
    document.getElementById('siseError').innerHTML = ''
    window.open('https://' + this.instance + link, '_blank', 'height=600,width=450')
  },
  title: encodeURI(document.title),
  href: encodeURI(location.href),
  image: 'https://notabug.org/sepbit/sise/raw/master/assets/images'
}

/**
 * Auto load
 */
document.addEventListener('DOMContentLoaded', function () {
  /**
   * View
   */
  if (document.getElementById('siseSB')) {
    document.getElementById('siseSB').innerHTML = sise.view()
  }

  /**
   * Click
   */
  if (document.getElementById('siseDiaspora')) {
    document.getElementById('siseDiaspora').addEventListener('click', function () {
      sise.shareDiaspora()
    })
  }

  if (document.getElementById('siseFriendica')) {
    document.getElementById('siseFriendica').addEventListener('click', function () {
      sise.shareDiaspora()
    })
  }

  if (document.getElementById('siseGnusocial')) {
    document.getElementById('siseGnusocial').addEventListener('click', function () {
      sise.shareGnuSocial()
    })
  }

  if (document.getElementById('siseHubzilla')) {
    document.getElementById('siseHubzilla').addEventListener('click', function () {
      sise.shareHubzilla()
    })
  }

  if (document.getElementById('siseMastodon')) {
    document.getElementById('siseMastodon').addEventListener('click', function () {
      sise.shareMastodon()
    })
  }

  if (document.getElementById('siseSocialhome')) {
    document.getElementById('siseSocialhome').addEventListener('click', function () {
      sise.shareDiaspora()
    })
  }
})
