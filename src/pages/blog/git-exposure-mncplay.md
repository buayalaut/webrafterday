---
title: Information Source Code Disclosure via Directory .git - MNC Play
date: 2021-09-10
---

Pada tanggal 15 Oktober 2020 saya menemukan BUG SQL Injection di [payment.mncplay.id](https://payment.mncplay.id) tetapi tidak ada respons dari pihak MNC Play.

Dan sekarang saya menemukan BUG GIT Exposure pada subdomain mncplay tepatnya di [b2b-api.mncplay.id](https://b2b-api.mncplay.id) yang dimana seluruh informasi source code dari website tersebut dapat terbaca oleh publik dan dapat di download menggunakan tools git dumper.

![](https://cdn.buayalaut.co/mncplay/Screenshot_7.png)

___

berikut hasil scanning menggunakan dirsearch
![](https://cdn.buayalaut.co/mncplay/Screenshot_2021-09-10_06_07_14.png)

lalu saya mencoba mendownload file nya menggunakan git dumper
![](https://cdn.buayalaut.co/mncplay/Screenshot_2021-09-09_20_54_24.png)

![](https://cdn.buayalaut.co/mncplay/Screenshot_2021-09-09_20_54_53.png)

___

sesudah mendownload semua file yang tadi, saya melanjutkannya untuk mengekstrak file yang masih terenkripsi tadi dengan menggunakan tools git extractor
![](https://cdn.buayalaut.co/mncplay/Screenshot_2021-09-09_20_55_11.png)

dan ini dia hasilnya, ketika sudah mengekstrak file nya, informasi source code dari website tersebut dapat dilihat
![](https://cdn.buayalaut.co/mncplay/Screenshot_2021-09-09_20_55_34.png)

sekian write up sederhana dari saya, see u