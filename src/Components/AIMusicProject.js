import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTopOnMount from '../ScrollToTopOnMount';
import OriginalSparkle from '../music/originalSparkle.mp3';
import GeneratedSparkle from '../music/generated.mp3';
import OriginalIdol from '../music/original-idol.mp3'
import GeneratedlIdol from '../music/markov-idol.mp3'
import './AIMusicProject.css'

const AIMusicProject = () => {
  return (
    <div>
        <ScrollToTopOnMount />
        <Header />
        <main>
            <h2>音楽生成AIの開発 (Python)</h2>
            <h3>開発の概要</h3>
                <ul>
                    <li>MIDIファイルを学習させて、新たに音楽を生成するAIを開発する</li>
                    <li>AIではなくマルコフ連鎖モデルを利用した自動音楽生成を開発する</li>
                </ul>
            <h3>開発の課題</h3>
                <ul>
                    <li>著作権で守られているため、学習データとなるMIDIファイルを大量に入手することが困難</li>
                    <li>生成された音楽が、音楽として成り立っていないほど低レベル</li>
                    <li>なかばもう諦めています（む、難しい...）</li>
                </ul>
            <h3>生成結果一覧</h3>
            <div className="generated-midi-result">
                <div className="generated-midi">
                    <h4>RADWIMPS スパークル（AI）</h4>
                    <div className="generated-items">
                        <div className="generated-item">
                            <div className="audio-label">オリジナル</div> {/* ラベルを追加 */}
                            <audio controls>
                            <source src={OriginalSparkle} type="audio/mp3" />
                            ご使用のブラウザではaudioタグがサポートされていません。
                            </audio>
                        </div>
                        <div className="generated-item">
                            <div className="audio-label">生成</div> {/* ラベルを追加 */}
                            <audio controls>
                            <source src={GeneratedSparkle} type="audio/mp3" />
                            ご使用のブラウザではaudioタグがサポートされていません。
                            </audio>
                        </div>
                    </div>
                </div>
                <div className="generated-midi">
                    <h4>YOASOBI アイドル（マルコフ連鎖）</h4>
                    <div className="generated-items">
                        <div className="generated-item">
                            <div className="audio-label">オリジナル</div> {/* ラベルを追加 */}
                            <audio controls>
                            <source src={OriginalIdol} type="audio/mp3" />
                            ご使用のブラウザではaudioタグがサポートされていません。
                            </audio>
                        </div>
                        <div className="generated-item">
                            <div className="audio-label">生成</div> {/* ラベルを追加 */}
                            <audio controls>
                            <source src={GeneratedlIdol} type="audio/mp3" />
                            ご使用のブラウザではaudioタグがサポートされていません。
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default AIMusicProject