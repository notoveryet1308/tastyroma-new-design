import React from 'react';

import Hero from '../../components/hero';
import MobileMiniDescrription from '../../components/mobile/MiniDescription';
import MiniDescription from '../../components/MiniDescription';
import WeServe from '../../components/WeServe';
import MobWeServe from '../../components/mobile/WeServe';
import MobChefSpecial from '../../components/mobile/ChefSpecial';
import ChefSpecial from '../../components/ChefsSpecial';
import MobRecipe from '../../components/mobile/Recipe';
import Recipe from '../../components/Recipe';
import Subscribe from '../../components/Subscribe';

function Index() {
  return (
    <div>
      <Hero />
      <MobileMiniDescrription />
      <MiniDescription />
      <MobWeServe />
      <WeServe />
      <MobChefSpecial />
      <ChefSpecial />
      <MobRecipe/>
      <Recipe />
      <Subscribe />
    </div>
  )
}

export default Index;
