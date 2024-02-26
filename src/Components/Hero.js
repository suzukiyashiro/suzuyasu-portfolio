import React from 'react'
import heroImage from '../img/hero3.jpg';
import './Hero.css'

const Hero = () => {
  return (
    <div id="hero">
        <div className="hero-image">
            <img src={heroImage} alt="my-img"/>
        </div>
        <div className="hero-desc">
            <h2>主な経歴</h2>
            <h3>・日本学生科学賞　<a rel="noreferrer" href="https://event.yomiuri.co.jp/jssa/prize/search?award_no=&school_type_id=&subject_id=&is_group=&central_prize_id=&title=%E5%A2%93%E7%9F%B3%E5%9C%B0%E9%9C%87%E5%AD%A6&name=&group_name=&prefecture_id=&school_name=&teacher_name=" className='hero-link' target="_blank">地学分野にて入選１等</a></h3>
            <h3>・長野県立屋代高校理数科　卒業</h3>
            <h3>・群馬大学情報学部情報学科　入学</h3>
            <h3>・表千家茶道　免状入門</h3>
            <h3>・若茶大茶会にて前橋市長にお手前を披露</h3>
            <h3>・<a rel="noreferrer" className='hero-link' href="https://gacci.co.jp/" target='blank'>株式会社GACCI</a>　長期インターン（継続中）</h3>
            <h3>・機械学習、深層学習を利用した競馬予測AI開発中</h3>
            <h3>・LSTMを利用した音楽生成AI開発中</h3>
            <h3>・嶋田香研究室にて人工知能学会に向け研究中</h3>
            <h3>・少数精鋭クラスで前橋教育委員会に向け、教育支援アプリを開発中</h3>
            <h3>・現在大学３年生</h3>
        </div>
    </div>
  )
}

export default Hero