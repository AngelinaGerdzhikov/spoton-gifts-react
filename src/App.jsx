import { useState } from 'react'
import Header from './components/Header/Header.jsx';
import GiftIdeaGenerator from './components/GiftIdeaGenerator/GiftIdeaGenerator.jsx';
import GiftIdeaResults from './components/GiftIdeaResults/GiftIdeaResults.jsx';
import { GIFT_IDEAS_LISTS } from './data.js';
import Footer from './components/Footer/Footer.jsx';
import GiftIdeaGeneratorContextProvider from './store/gift-idea-gen-context.jsx';

function App() {
  return (
    <GiftIdeaGeneratorContextProvider>
      <Header />
      <GiftIdeaGenerator />
      <GiftIdeaResults />
      <Footer />
    </GiftIdeaGeneratorContextProvider>
  )
}

export default App
