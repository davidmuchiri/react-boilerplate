import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DefaultErrorBoundary extends Component {
   static propTypes = {
      children: PropTypes.node.isRequired
   };

   state = { isError: false };

   static getDerivedStateFromError() {
      return { isError: true };
   }

   render() {
      const {
         state: { isError },
         props: { children }
      } = this;

      return isError ? <div>Something went wrong !</div> : children;
   }
}
