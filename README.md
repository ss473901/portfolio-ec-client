<h1 align="center">
Portfolio - EC website [Client Side]

## 使用技術
  
- react@17.0.2
- @emotion/react@11.7.1
- @emotion/styled@11.6.0
- @material-ui/core@4.12.3
- @material-ui/icons@4.11.2
- @mui/icons-material@5.4.2
- @mui/material@5.4.2
- @reduxjs/toolkit@1.7.2
- @testing-library/jest-dom@5.16.2
- @testing-library/react@12.1.3
- @testing-library/user-event@13.5.0
- firebase@9.6.7
- react-dom@17.0.2
- react-redux@7.2.6
- react-router-dom@6.2.1
- react-scripts@5.0.0
- styled-components@5.3.3
- web-vitals@2.1.4 

  
 
## Deploy

- Netlify(For client side)
- Heroku(For server side)
  
  
  # News-App

## 【概要】

![Alt text](src/assets/logo-news.png)

## Application:News Quu

[Go to News Quu App](https://news-app-8efb7.web.app/)

- Login E-mail :testaccount.1@test.ttt.com
- Password :testuser1214

### Description

ビジネス情報や株価等を閲覧することができるニュースサイトです。\
 カテゴリ別に記事表示を変更することや、調べたい word で記事を検索することが出来ます。

## 【Technologies used (使用技術)】

- React.js v17.0.1\
   (Hooks: useState, useEffect, useContext)
- react-router-dom v0.21.1
- Material-UI v4.11.3
- node-sass v5.0.0
- react-chartjs-2 v2.11.1
- react-spinners v0.10.6
- axios v0.21.1
- Firebase v8.2.9\
  (Authentication, CloudFirestore, Hosting)

Used API

- bing news search
- FMP Cloud
- Marketstack

## 【SetUp (開発方法)】

Go to the project folder and install required dependencies.

### `yarn install`

And run Webpack watch for code changes and bundle js and css

### `yarn start`

Project will be automatically open at http://localhost:3000
For production build:

### `yarn build`

If you need API keys, get it from this link.

- [bing news search](https://api.rakuten.net/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/details)
- [FMP Cloud](https://fmpcloud.io/)
- [MarketStack](https://marketstack.com/)\
  ※All can be registered for free.

## 【機能一覧】

| 機能                           | 概要                                                       |
| ------------------------------ | ---------------------------------------------------------- |
| 記事一覧表示                   | API から取得したニュース記事を表示                         |
| 記事個別表示                   | API から取得したニュース記事を個別に表示                   |
| カテゴリ切り替え               | "Business", "Technology"などのカテゴリを切り替え記事を取得 |
| 株価表示                       | 主要株の価格、前日終値に対しての現在価格の変動比(%)を表示  |
| Chart 表示                     | 株価を月間ベースで chart 描画                              |
| 記事検索                       | free word で探したいニュース記事を検索                     |
| ユーザー新規登録(Auth)         | User の新規登録                                            |
| ユーザーログイン(Auth)         | Email and Password, Google 認証を利用したログイン機能      |
| 記事 Clip/削除(CloudFireStore) | 気に入った記事の clip, 削除機能                            |
| 言語/地域切替(uesContext)      | 言語/地域別に表示する記事を変更                            |
