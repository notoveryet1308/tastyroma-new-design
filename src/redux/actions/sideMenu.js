import {sidemenu} from '../constants';

export const openSideMenu = ()=>({
   type: sidemenu.show,
   payload: true
});

export const HideSideMenu = ()=>({
  type: sidemenu.hide,
  payload: false
})