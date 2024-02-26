import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="my-life">
        <h3>これまでの歩み</h3>
        <div className="my-life-container">
          <ul className='my-life-desc'>
            <li>小中高とバスケットボールでキャプテン・部長を務める</li>
            <li>中学では地域活性化のためのボランティアに参加</li>
            <li>高校生の時に地学分野で日本学生科学賞入選１等を受賞</li>
            <li>大学では茶道部に入り日本文化を学んでいる</li>
            <li>大学1年の頃に受講したWebサービス入門で初めてHTML,CSSに触れて面白いと感じ、受講後は独学で学び始める</li>
            <li>1ヶ月だけSkypeでアメリカ西海岸に住む65歳の方と互いに母国語を教え合った<br></br>（16時間の時差がキツかった...）</li>
            <li>株式投資経験あり（主に米国のETFを持つ）</li>
            <li>仮想通貨取引経験・NFT販売経験あり</li>
            <li>Progate, dotinstall, Udemyで様々なプログラミング言語を学ぶ</li>
            <li>LightGBM・NNモデル・RNNモデル等を用いた競馬予測AIアルゴリズムを開発中</li>
            <li>株式会社GACCIにて長期インターンに参加（週3日4時間勤務（水金土）・ TypeScript / Docker / Git<br/>時間があるため別のインターンを探している</li>
            <li>2024年6月に行われる人工知能学会に向けて精進中</li>
          </ul> 
        </div>
      </div>

      <div className="my-character">
        <ul>
          <h3>人となり</h3>
          <li>趣味は筋トレと読書</li>
          <li>筋トレはベンチプレス80キロ、スクワット100キロ、デッドロック150キロ</li>
          <li>読書で、ビジネス書では「Originals（アダム・グラント）」「影響力の武器（ロバート・チャルディーニ）」、小説では「かがみ孤城（辻村深月）」「無職転生（理不尽な孫の手）」が好き</li>
          <li>機械学習・人工知能・深層学習に強い興味あり</li>
          <li>世界遺産検定の資格を取ろうと思っているが、未だに取っていない</li>
          <li>物理・歴史・地理が好き</li>
          <li>最近、目が悪くなってきてメガネを買おうか迷っている</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
