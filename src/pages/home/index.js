import React from 'react'
import Logo from '../../components/common/Logo';
import BackBtn from '../../components/common/Backbtn';
import SandwichBar from '../../components/common/SandwichBar';
import CrossBtn from '../../components/common/CrossBtn';
import Hightlight from '../../components/common/Highlightbox';
function Index() {
  return (
    <div style={{margin: "5rem"}}>
      <Logo/>
      <BackBtn />
      <SandwichBar />
      <CrossBtn />
      <Hightlight width='100%' height="10rem" radius="2rem" />
    </div>
  )
}

export default Index;
