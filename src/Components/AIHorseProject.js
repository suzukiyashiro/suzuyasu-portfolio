import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopOnMount from '../ScrollToTopOnMount';
import '../App.css'
import './AIHorseProject.css'

const AIProject = () => {
  const raceResults = [
    {
      title: "京都新聞杯（5/6）",
      model: "全結合層を使用したNNモデル",
      prediction: ["サトノグランツ", "マイネルラウレア", "ドットクルー"],
      actual: ["サトノグランツ", "ダノントルネード", "リビアンクラス"],
    },
    {
      title: "NHKマイル（5/7）",
      model: "全結合層を使用したNNモデル",
      prediction: ["ダノンタッチダウン", "シャンパンカラー", "モリアーナ"],
      actual: ["シャンパンカラー", "ウンブライル", "オオバンブルマイ"],
    },
    {
      title: "新潟大賞典（5/7）",
      model: "全結合層を使用したNNモデル（この結果はおそらく偶然）",
      prediction: ["カラテ", "セイウンハーデス", "イクスプロージョン"],
      actual: ["カラテ", "セイウンハーデス", "イクスプロージョン"],
    },
    {
      title: "ヴィクトリアマイル（5/14）",
      model: "全結合層を使用したNNモデル",
      prediction: ["スターズオンアース", "ロータスランド", "ソングライン"],
      actual: ["ソングライン", "ソダシ", "スターズオンアース"],
    },
    {
      title: "日本ダービー（5/28）",
      model: "全結合層を使用したNNモデル",
      prediction: ["メタルスピード", "ソールオリエンス", "ファントムシーフ"],
      actual: ["タスティエーラ", "ソールオリエンス", "ハーツコンチェルト"],
    },
    {
      title: "安田記念（6/4）",
      model: "全結合層を使用したNNモデル",
      prediction: ["セリフォス", "ナランフレグ", "ジャックドール"],
      actual: ["ソングライン", "セリフォス", "シュネルマイスター"],
    },
    {
      title: "ユニコーンS（6/18）",
      model: "LSTMを使用したRNNモデル（血統データを追加）",
      prediction: ["ペリエール", "ブライアンセンス", "グレートサンドシー"],
      actual: ["ペリエール", "サンライズジーク", "ブライアンセンス"],
    },
    {
      title: "宝塚記念（6/25）",
      model: "LSTMを軸に多層パーセプトロン、全結合層を組み合わせたモデル",
      prediction: ["イクイノックス", "ジャスティンパレス", "ジェラルディーナ"],
      actual: ["イクイノックス", "スルーセブンシーズ", "ジャスティンパレス"],
    },
    {
      title: "七夕賞（7/9）",
      model: "LSTMを軸に多層パーセプトロン、全結合層を組み合わせたモデル",
      prediction: ["セイウンハーデス", "フェーングロッテン", "バトルボーン", 'エヒト', 'テーオーソラネル'],
      actual: ["セイウンハーデス", "ククナ", "ホウオウエミーズ", 'バトルボーン', 'レッドランメルト'],
    },
    {
      title: "函館記念(7/16）",
      model: "LSTMを軸に多層パーセプトロン、全結合層を組み合わせたモデル",
      prediction: ["ローシャムパーク", "アラタ", "ブローザホーン", 'ルビーカサブランカ', 'ドーブネ'],
      actual: ["ローシャムパーク", "ルビーカサブランカ", "ブローザホーン", 'マイネルウィルトス', 'ハヤヤッコ'],
    },
    {
      title: "中京記念(7/23）",
      model: "中間層を5層に増やして検証Lossを0.13にした(以前までは0.35くらい)",
      prediction: ["ルージュスティリア", "ディヴィーナ", "ウイングレイテスト", "ダノンスコーピオン", 'ヴァリアメンテ'],
      actual: ["セルバーグ", "ディヴィーナ", "ルージュスティリア", "ウイングレイテスト", 'サブライムアンセン'],
    },
  ];

  const raceBinaryResults = [
    {
      title: "秋華賞（10/15）",
      model: "LightGBM：精度80.0% 適合率63.0% 再現率81.0% F1スコア70.8% AUC87.1%",
      binaryPrediction: ["リバティアイランド"], 
      binaryActual: ["リバティアイランド", "マスクトディーヴァ", "ハーパー"] 
    },
    {
      title: "菊花賞（10/22）",
      model: "LightGBM：精度89.7% 適合率85.2% 再現率88.5% F1スコア86.8% AUC97.4%",
      binaryPrediction: ["タスティエーラ", "ソールオリエンス", 'ドゥレッツァ'], 
      binaryActual: ["ドゥレッツァ", "タスティエーラ", "ソールオリエンス"] 
    },
    {
      title: "天皇賞・秋（10/29）",
      model: "LightGBM：精度66.7% 適合率70.0% 再現率82.4% F1スコア75.7% AUC72.4%",
      binaryPrediction: ["ドウデュース", "ダノンベルーガ", 'イクイノックス', 'プログノーシス'], 
      binaryActual: ["イクイノックス", "ジャスティンパレス", "プログノーシス"] 
    },
    {
      title: "エリザベス女王杯（11/19）",
      model: "LightGBM：精度74.4% 適合率94.1% 再現率64.0% F1スコア76.2% AUC77.1%",
      binaryPrediction: ["ブレイディヴェーグ"], 
      binaryActual: ["ブレイディヴェーグ", "ルージュエヴァイユ", "ハーパー"] 
    },
    {
      title: "有馬記念（12/24）",
      model: "LightGBM：精度77.1% 適合率74.2% 再現率67.6% F1スコア70.8% AUC81.6%",
      binaryPrediction: ['タイトルホルダー'], 
      binaryActual: ['ドウドゥース', 'スターズオンアース', 'タイトルホルダー'] 
    },
  ];

  function getHorseStyleClass(horse, actual, prediction) {
    if (actual.includes(horse) && prediction.includes(horse)) {
      if (actual.indexOf(horse) === prediction.indexOf(horse)) {
        return "correct-horse correct-order";
      } else {
        return "correct-horse";
      }
    }
    return "";
  }

  function getBinaryHorseStyleClass(horse, actual) {
    return actual.includes(horse) ? "binary-correct-horse" : "";
  }

  return (
    <div>
      <ScrollToTopOnMount />
      <Header />
      <main>
        <h2>競馬予測AIアルゴリズムの開発 (Python)</h2>
        <h3>開発の概要</h3>
        <ul>
          <li><a className='netkeiba' href="https://www.netkeiba.com/?rf=logo">netkeiba.com</a>から<small className='scraping'>Selenium,Beautifulsoup</small>を使ってスクレイピングを行い2010年から2023年5月までの約65万頭のレースデータを取得</li>
          <li>ランダムフォレストなど様々な機械学習モデルを試す</li>
          <li>ニューラルネットワークモデルに切り替え本格的に予測を始める</li>
          <li>学習モデルを時系列に特化したLSTMモデルに切り替える</li>
          <li>新たに血統のデータをスクレイピングして取得し、特徴量を増やす</li>
          <li>異なる学習モデルを組み合わせて使えるか実験中</li>
          <li>ハイパーパラメータはOptunaを使って探索して使っている</li>
          <li>質的変数の扱いに困っていたが（one-hot-encordingだと特徴数が爆発的に増えてしまう）、最近LightGBMの論文を読んで「これは使える！！！」と思ったので、また開発することにした</li>
        </ul>
        <h3>開発の課題</h3>
        <ul>
          <li>ノートパソコンでは65万ものデータを扱うとサイズが大きすぎて止まる（実行で「zash killed」と表示される）<br></br>
            仕方なく2010年からのデータではなく2017年からのものを使い、なお且つ着順が1位から6位までのデータを使って10万まで減らしている
          </li>
          <li>ノートパソコンでは何層もの層で学習できない（最大で３層 「zash killed」問題）</li>
          <li>血統カラムは、その馬の「父」「母」「父父」「母父」の4カラムを使っている。<br></br>
            しかしデータとしては「父」から「母母母母母」の合計64カラム分のデータを持っているが、データが増えると...。
          </li>
          <li>パラメータ最適化でOptunaを使用しているが、ここに進化戦略の考え方を導入した最適化アルゴリズムを開発できないか模索中</li>
          <li>様々な機械学習モデルをランダムに組み合わせて一番良い学習モデルを作れないか模索中（例:LSTMとMLPを組み合わせて使う...等）</li>
          <li>質的変数の扱いに困っていたが（one-hot-encordingだと特徴数が爆発的に増えてしまう）、最近LightGBMの論文を読んで「これは使える！！！」と思ったので、また開発することにした(2023/12/21時点)。２項分類問題として入着するかしないかを予測することにする。</li>
        </ul>
        <h3>予測結果一覧（多クラス分類）</h3>
        <div className="race-results">
          {raceResults.map((race, index) => (
            <div className="race" key={index}>
              <div className="race-header">
                <h4 className="race-title">{race.title}</h4>
                <p className="race-model">{race.model}</p>
              </div>
              <div className="results">
                <div className="prediction">
                  <h5 className="results-title">予測結果</h5>
                  <ul>
                    {race.prediction.map((horse, i) => (
                      <li key={i}>
                        <span className="place">{i + 1}位: </span>
                        <span className={getHorseStyleClass(horse, race.actual, race.prediction)}>{horse}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="actual">
                  <h5 className="results-title">実際の結果</h5>
                  <ul>
                    {race.actual.map((horse, i) => (
                      <li key={i}>
                        <span className="place">{i + 1}位: </span>
                        <span className={getHorseStyleClass(horse, race.actual, race.prediction)}>{horse}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h3>予測結果一覧（２値分類）</h3>
        <div className="race-results">
          {raceBinaryResults.map((race, index) => (
            <div className="race" key={index}>
              <div className="race-header">
                <h4 className="race-title">{race.title}</h4>
                <p className="race-model">{race.model}</p>
              </div>
              <div className="results">
                <div className="prediction">
                  <h5 className="results-title">入着予測</h5>
                  <ul>
                    {race.binaryPrediction.map((horse, i) => (
                      <li key={i} className={getBinaryHorseStyleClass(horse, race.binaryActual)}>{horse}</li>
                    ))}
                  </ul>
                </div>
                <div className="actual">
                  <h5 className="results-title">入着結果</h5>
                  <ul>
                    {race.binaryActual.map((horse, i) => (
                      <li key={i} className={getBinaryHorseStyleClass(horse, race.binaryPrediction)}>{`${i + 1}位: ${horse}`}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIProject;
