import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DefaultErrorBoundary extends Component {
   static propTypes = {
      children: PropTypes.node.isRequired
   };

   state = { isError: false, error: '', errorInfo: '' };

   static getDerivedStateFromError() {
      return { isError: true };
   }

   componentDidCatch(error, errorInfo) {
      this.setState({ error });
      this.setState({ errorInfo });
   }

   render() {
      const {
         state: { isError, error },
         props: { children }
      } = this;

      return isError ? (
         <div className="errorBoundary">
            <p className="errorBoundary--title">Something went wrong!</p>
            <p className="errorBoundary--error">{error.toString()}</p>
         </div>
      ) : (
         children
      );
   }
}
