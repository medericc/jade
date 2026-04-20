'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ExercicesPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const questions = [
    {
      question: 'Que veut dire "Adishatz" ?',
      options: ['Au revoir', 'Bonjour / Au revoir', 'Merci', 'S\'il vous plaît'],
      correct: 1
    },
    {
      question: 'Comment dit-on "Je suis" en béarnais ?',
      options: ['Qu\'èi', 'Que sòi', 'Qu\'as', 'Que sèm'],
      correct: 1
    },
    {
      question: 'Quelle est la traduction de "Merci beaucoup" ?',
      options: ['De nada', 'Per favor', 'Merci plan', 'Pardon'],
      correct: 2
    },
    {
      question: '"Que plau" signifie :',
      options: ['Il fait beau', 'Il pleut', 'Il fait froid', 'Il neige'],
      correct: 1
    },
    {
      question: 'Comment dit-on "À demain" ?',
      options: ['A deman', 'Adishatz', 'Bonsoir', 'Au reveire'],
      correct: 0
    }
  ]

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    const correct = index === questions[currentQuestion].correct
    setIsCorrect(correct)
    
    if (correct) {
      setScore(score + 1)
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setIsCorrect(null)
      } else {
        setShowResult(true)
      }
    }, 1000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setIsCorrect(null)
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --violet-profond: #4B1E6D;
          --violet-clair: #9B6BB7;
          --violet-tres-clair: #E9DDF2;
          --jaune-vif: #FFD700;
          --jaune-pastel: #FFF4CC;
          --blanc: #FDFBF7;
          --blanc-pur: #FFFFFF;
          --texte-principal: #2D0A45;
          --texte-secondaire: #6B4B7A;
          --fs-xs: clamp(0.75rem, 1.5vw, 0.875rem);
          --fs-sm: clamp(0.875rem, 2vw, 1rem);
          --fs-base: clamp(1rem, 2.5vw, 1.125rem);
          --fs-md: clamp(1.25rem, 3vw, 1.5rem);
          --fs-lg: clamp(1.5rem, 4vw, 2.5rem);
          --fs-xl: clamp(2rem, 5vw, 3.5rem);
          --space-xs: clamp(0.5rem, 1vw, 0.75rem);
          --space-sm: clamp(0.75rem, 1.5vw, 1rem);
          --space-md: clamp(1rem, 2vw, 1.5rem);
          --space-lg: clamp(1.5rem, 3vw, 2.5rem);
          --space-xl: clamp(2rem, 4vw, 4rem);
        }

        * { box-sizing: border-box; padding: 0; margin: 0; }
        html, body { max-width: 100vw; overflow-x: hidden; background-color: var(--blanc); color: var(--texte-principal); font-family: system-ui, sans-serif; }
        body { -webkit-font-smoothing: antialiased; }
        a { color: inherit; text-decoration: none; }
        .container { width: 100%; max-width: 800px; margin-left: auto; margin-right: auto; padding-left: var(--space-md); padding-right: var(--space-md); }
        @media (min-width: 1920px) { .container { max-width: 1200px; } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        .animate-fade-up { animation: fadeUp 0.4s ease-out forwards; }
      `}</style>

      <main style={{ minHeight: '100vh' }}>
        
        {/* Header */}
        <header style={{
          background: 'var(--violet-profond)',
          padding: 'var(--space-md) 0',
          borderBottom: '3px solid var(--jaune-vif)'
        }}>
          <div className="container" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-md)',
            flexWrap: 'wrap'
          }}>
            <Link href="/apprendre">
              <span style={{
                color: 'var(--jaune-vif)',
                fontSize: 'var(--fs-md)',
                cursor: 'pointer'
              }}>
                ← Retour
              </span>
            </Link>
            <h1 style={{
              color: 'var(--blanc-pur)',
              fontSize: 'var(--fs-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-sm)'
            }}>
              <span>🎯</span>
              Exercicis
            </h1>
            {!showResult && (
              <div style={{
                marginLeft: 'auto',
                color: 'var(--jaune-vif)',
                fontSize: 'var(--fs-md)',
                fontWeight: 'bold'
              }}>
                Score: {score}/{questions.length}
              </div>
            )}
          </div>
        </header>

        {/* Quiz */}
        <section style={{
          padding: 'var(--space-xl) 0',
          background: 'var(--blanc-pur)',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div className="container">
            {!showResult ? (
              <div className="animate-fade-up">
                {/* Progression */}
                <div style={{
                  marginBottom: 'var(--space-lg)'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 'var(--space-xs)',
                    fontSize: 'var(--fs-sm)',
                    color: 'var(--texte-secondaire)'
                  }}>
                    <span>Question {currentQuestion + 1}/{questions.length}</span>
                    <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'var(--violet-tres-clair)',
                    borderRadius: '10px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${((currentQuestion) / questions.length) * 100}%`,
                      height: '100%',
                      background: 'var(--jaune-vif)',
                      transition: 'width 0.5s'
                    }} />
                  </div>
                </div>

                {/* Question */}
                <div style={{
                  background: 'var(--jaune-pastel)',
                  padding: 'var(--space-xl)',
                  borderRadius: '20px',
                  marginBottom: 'var(--space-lg)'
                }}>
                  <h2 style={{
                    fontSize: 'var(--fs-lg)',
                    color: 'var(--violet-profond)',
                    textAlign: 'center'
                  }}>
                    {questions[currentQuestion].question}
                  </h2>
                </div>

                {/* Options */}
                <div style={{
                  display: 'grid',
                  gap: 'var(--space-md)'
                }}>
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      style={{
                        padding: 'var(--space-md) var(--space-lg)',
                        fontSize: 'var(--fs-base)',
                        borderRadius: '15px',
                        border: '2px solid',
                        cursor: selectedAnswer !== null ? 'default' : 'pointer',
                        transition: 'all 0.3s',
                        textAlign: 'left',
                        background: selectedAnswer === index 
                          ? (isCorrect ? '#4CAF50' : '#f44336')
                          : (selectedAnswer !== null && index === questions[currentQuestion].correct 
                              ? '#4CAF50' 
                              : 'var(--blanc-pur)'),
                        borderColor: selectedAnswer === index 
                          ? (isCorrect ? '#4CAF50' : '#f44336')
                          : (selectedAnswer !== null && index === questions[currentQuestion].correct 
                              ? '#4CAF50' 
                              : 'var(--violet-clair)'),
                        color: selectedAnswer === index || (selectedAnswer !== null && index === questions[currentQuestion].correct)
                          ? 'white'
                          : 'var(--texte-principal)',
                        opacity: selectedAnswer !== null && selectedAnswer !== index && index !== questions[currentQuestion].correct
                          ? 0.6
                          : 1
                      }}
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </button>
                  ))}
                </div>

                {/* Feedback */}
                {selectedAnswer !== null && (
                  <div className="animate-fade-up" style={{
                    marginTop: 'var(--space-lg)',
                    padding: 'var(--space-md)',
                    borderRadius: '10px',
                    textAlign: 'center',
                    background: isCorrect ? '#E8F5E9' : '#FFEBEE',
                    color: isCorrect ? '#2E7D32' : '#C62828'
                  }}>
                    {isCorrect ? '✅ Bravo ! C\'est correct !' : '❌ Oups... Ce n\'est pas la bonne réponse.'}
                  </div>
                )}
              </div>
            ) : (
              /* Résultats */
              <div className="animate-fade-up" style={{
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '80px',
                  marginBottom: 'var(--space-lg)'
                }}>
                  {score === questions.length ? '🏆' : score >= 3 ? '🎉' : '📚'}
                </div>
                
                <h2 style={{
                  fontSize: 'var(--fs-xl)',
                  color: 'var(--violet-profond)',
                  marginBottom: 'var(--space-md)'
                }}>
                  Quiz terminat !
                </h2>
                
                <div style={{
                  fontSize: 'var(--fs-xxl)',
                  fontWeight: 'bold',
                  color: 'var(--jaune-vif)',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                  marginBottom: 'var(--space-lg)'
                }}>
                  {score} / {questions.length}
                </div>
                
                <p style={{
                  fontSize: 'var(--fs-base)',
                  color: 'var(--texte-secondaire)',
                  marginBottom: 'var(--space-xl)'
                }}>
                  {score === questions.length 
                    ? 'Perfèit ! Tu es un vrai béarnais ! 🎯' 
                    : score >= 3 
                      ? 'Plan ! Continue comme ça ! 💪' 
                      : 'Encara un esforç ! Tu vas y arriver ! 🌟'}
                </p>
                
                <button
                  onClick={resetQuiz}
                  style={{
                    background: 'var(--violet-profond)',
                    color: 'var(--blanc-pur)',
                
                    padding: 'var(--space-md) var(--space-xl)',
                    fontSize: 'var(--fs-md)',
                    fontWeight: 'bold',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    border: '2px solid var(--jaune-vif)'
                  }}
                >
                  Tornar començar →
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: 'var(--space-lg) 0',
          background: 'var(--violet-profond)',
          color: 'var(--blanc-pur)',
          textAlign: 'center'
        }}>
          <div className="container">
            <p>© 2026 • Aprén lo biarnés</p>
          </div>
        </footer>
      </main>
    </>
  )
}