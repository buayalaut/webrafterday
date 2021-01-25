---
title: SQL Injection at alfamidiku.com
date: 2020-06-04
---

Halo semuanya, kali ini saya ingin share write up SQL Injection di website alfamidiku.com, pasti kalian semua tau ya dan sering juga dijumpai di pinggir jalan atau dimanapun kalian berada, selengkapnya tentang Alfamidi ada di [Wikipedia](https://id.wikipedia.org/wiki/Alfamidi)

Sebelumnya saya sudah menemukan vulnerable SQLI juga di subdomain website alfamartku.com, langsung aja ya

___

Vulnerability SQL Injection ini berada di website utamanya, tepatnya di directory /info-kerjasama/, yang isinya adalah formulir pendaftaran Waralaba
Saya mencoba mengecek satu-satu kolom registernya, dan sampai di kolom provinsi seperti ada request url di balik itu, sebab ketika saya memilih provinsi DKI Jakarta maka di kolom kota/kab menampilkan data-data dari Provinsi DKI Jakarta
