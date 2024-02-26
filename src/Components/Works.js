import React from 'react';
import { Link } from 'react-router-dom';
import derbyImage from '../img/derby.png';
import musicImage from '../img/music.jpg';
import othelloImage from '../img/othello.png';
import siteImage from '../img/site.png';
import calcImage from '../img/caluculator.jpeg'
import sampleImage from '../img/sample-portfolio.jpeg'
import clockImage from '../img/clock.jpeg'
import labImage from '../img/lab.png'
import bulletinImage from "../img/bulletinBoard.jpg"
import weatherAppImage from "../img/weatherApp.jpg"
import stockImage from "../img/stock-chart.jpg"
import lineImage from "../img/line.jpg"
import './Works.css'


const Works = () => {
  return (
    <section id="works">
      <h2>Works</h2>
      <h4>スマホレイアウトは作ってないものもある</h4>
      <ul>
        <Link to="https://line-clone-app.vercel.app/auth" target='blank'>
          <li>
            <img src={lineImage} alt="line-clone-app" />
            <p>LINEクローンアプリ</p>
            <p className='workDesc'>Next.js / Firebase</p>
          </li>
        </Link>
        <Link to="https://sites.google.com/gunma-u.ac.jp/automated-stock-trading-system/%E3%83%9B%E3%83%BC%E3%83%A0" target='blank'>
          <li>
            <img src={stockImage} alt="horse-racing-AI" />
            <p>株式自動売買システム開発過程</p>
            <p className='workDesc'>Python</p>
          </li>
        </Link>
        <Link to="https://suzukiyashiro.github.io/my-bulletin-board" target='blank'>
          <li>
            <img src={bulletinImage} alt="horse-racing-AI" />
            <p>掲示板アプリ</p>
            <p className='workDesc'>React / Firebase</p>
          </li>
        </Link>
        <Link to="/ai-horse-project">
          <li>
            <img src={derbyImage} alt="horse-racing-AI" />
            <p>競馬予測AIアルゴリズムの開発</p>
            <p className='workDesc'>Python(LSTM / LightGBM　/ スクレイピング)</p>
          </li>
        </Link>
        <Link to="/ai-music-project">
          <li>
            <img src={musicImage} alt="horse-racing-AI" />
            <p>音楽生成AIの開発</p>
            <p className='workDesc'>Python(LSTM)</p>
          </li>
        </Link>
        <Link to="/laboratry">
          <li>
            <img src={labImage} alt="horse-racing-AI" />
            <p>嶋田ゼミ・研究</p>
            <p className='workDesc'>Clang / Python</p>
          </li>
        </Link>
        <Link to="https://suzukiyashiro.github.io/othello-app/" target='blank'>
          <li>
            <img src={othelloImage} alt="othello-game" />
            <p>オセロゲーム開発</p>
            <p className='workDesc'>React</p>
          </li>
        </Link>
        <Link to="https://weather-app-qnqyp2egcu9hxdn5ayvqtt.streamlit.app/" target='blank'>
          <li>
            <img src={weatherAppImage} alt="weather-app" />
            <p>天気アプリ</p>
            <p className='workDesc'>Python(Streamlit)</p>
          </li>
        </Link>
        <Link to="https://suzukiyashiro.github.io/gunma-sado/" target='blank'>
          <li>
            <img src={siteImage} alt="club-introduction" />
            <p>部活サイト制作</p>
            <p className='workDesc'>HTML / CSS / JavaScript</p>
          </li>
        </Link>
        <Link to="https://suzukiyashiro.github.io/Calculator-app/" target='blank'>
          <li>
            <img src={calcImage} alt="calc-app" />
            <p>電卓アプリ</p>
            <p className='workDesc'>HTML / CSS / JavaScript</p>
          </li>
        </Link>
        <Link to="https://suzukiyashiro.github.io/sample-portfolio-site/" target='blank'>
          <li>
            <img src={sampleImage} alt="sample-portfolio-site" />
            <p>サンプルポートフォリオサイト</p>
            <p className='workDesc'>HTML / CSS</p>
          </li>
        </Link>
        <Link to="https://suzukiyashiro.github.io/clock-app/" target='blank'>
          <li>
            <img src={clockImage} alt="clock-app" />
            <p>時計アプリ</p>
            <p className='workDesc'>React</p>
          </li>
        </Link>
      </ul>
    </section>
  );
};

export default Works;
