import { useHistory } from "react-router-dom";

function useLinkPush(link: string) {
  const history = useHistory();

  return function handlePushLink() {
    history.push(link);
  };
}

export default useLinkPush;
