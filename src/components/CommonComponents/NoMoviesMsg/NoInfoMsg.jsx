import { NoInfoMsg } from './NoInfoMsg.styled';
import PropTypes from 'prop-types';

export function NoInfoMsgComponent({ text = 'No information', query = '' }) {
  return (
    <NoInfoMsg>
      {text}
      {query}
    </NoInfoMsg>
  );
}

NoInfoMsgComponent.propTypes = {
  text: PropTypes.string,
  query: PropTypes.string,
};
