import React from 'react';
import Main from '../components/Main';
import { Router, DefaultRoute, Route } from 'react-router';

export default (
    <Route name="app" path="/" handler={Main} />
);