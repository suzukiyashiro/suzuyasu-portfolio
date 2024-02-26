import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTopOnMount from '../ScrollToTopOnMount'
import './Laboratry.css'

const Laboratry = () => {
  return (
    <div>
        <ScrollToTopOnMount />
        <Header />
        <main>
          <h1>ゼミ・研究室・研究</h1>
            <div className="menter">
                <h2>指導教員</h2>
              <ul>
                <h3><a href="https://www.inf.gunma-u.ac.jp/teacher/shimada/" rel="noreferrer" target="_blank" className='lab-link'>嶋田香教授</a></h3>
              </ul>
            </div>
            <div className="lab-contaier">
              <h2>研究概要</h2>
                <ul>
                <h3>嶋田香教授の研究内容であるGNPの「GNMier」の拡張</h3>

                <h4>GNP（遺伝的ネットワークプログラミング）とは？</h4>
                <ul>
                  <li>市場バスケット分析、バイオインフォマティクス、医療診断などに適用可能な、ルールを読み取り可能な形でのクラス分類を可能にする高度なデータ分析ツール</li>
                  <li>連続的な数値データ値を扱う数値的関連ルールマイニング（NARM）により、大規模かつ多様なデータに対応する複雑な値の表現が可能</li>
                  <li>ネットワーク構造と世代連続的結果蓄積に基づく進化計算法を用いて、頻出アイテムセットの構築過程なしにユーザー設定の柔軟な条件を満たす関連ルールを直接発見</li>
                </ul>

                <h4>GNMierとは？</h4>
                <ul>
                  <li>データベース内の数値属性間の複雑な関連や他の属性との組み合わせによる背景の説明が可能な高度なデータマイニング</li>
                  <li>二つの連続変数の統計分布を二次元に拡張することにより、データベースからの関心のある二つの連続変数が狭い範囲の値を取る属性の組み合わせを発見</li>
                  <li>発見されたルールセットを使用して、二変数のルールベース回帰問題に適用可能</li>
                </ul>

                  <h4>「GNMier」の拡張とは？</h4>
                  <ul>
                    <li>目的: 個別性を考慮したルール発見と予測・分類への応用</li>
                    <li>目標: 連続値属性からなるデータベースにおいて、個別性を考慮したルール発見の実施可能性と分類・予測への応用可能性の提示</li>
                    <li>背景: 連続値属性を扱うルールベースの分類・予測手法では、離散化における扱いが課題</li>
                    <li>提案手法: 事例ごとに属性値に基づいて離散化することで、個別の情報を最大限に活用</li>
                    <li>実験案: UCIデータなどを用いた分類・予測性能の検証と従来手法との比較</li>
                    <li>新規性: 連続値属性を扱う新方式の導入と個別事例対応の知識発見手法の提案</li>
                    <li>発展性: ルールベースの方法に対する応用の検討</li>
                  </ul>

              </ul>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Laboratry
