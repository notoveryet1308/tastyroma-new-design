import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {HideSideMenu} from '../../redux/actions/sideMenu';

function ScrollToTop({ history }) {
  const dispatch = useDispatch();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    dispatch(HideSideMenu())
    return () => {
      unlisten();
    }
  }, [history, dispatch]);

  return (null);
}

export default withRouter(ScrollToTop);