---
title: Information Source Code Disclosure via Directory .git - LSP BPJS Kesehatan
date: 2021-03-03
---

Penemuan ini awalnya bermula dari saya isengiseng mengunjungi web adm-bpjs.lspbnsp.id
![](https://competent-cori-57d622.netlify.app/bpjs/Screenshot_5.png)

Vulnerability nya terletak pada direktori .git ketika saya menggunakan dirsearch maka respons nya 200
![](https://competent-cori-57d622.netlify.app/bpjs/Screenshot_6.png)

___

Lalu saya mencoba dump direktori .git nya dengan menggunakan GIT Dumper
![](https://competent-cori-57d622.netlify.app/bpjs/Screenshot_7.png)

Lalu saya mencoba ekstrak folder dumper nya, dan mendapatkan source code pada web tersebut, beserta informasi sensitif lainnya
![](https://competent-cori-57d622.netlify.app/bpjs/Screenshot_8.png)

___

Timeline Report

- Mengirimkan Laporan ke email humas@bpjs-kesehatan.go.id dan hackathonbpjs@bpjs-kesehatan.go.id
