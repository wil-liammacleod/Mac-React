
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './pages/HomePage'
import Todolist from './pages/TodoList'
import AboutPage from './pages/AboutPage'
import TeamsPage from './pages/TeamsPage'
import NewsPage from './pages/NewsPage'
import EventsPage from './pages/EventsPage'
import ContactUsPage from './pages/ContactUsPage'
import PartnersPage from './pages/PartnersPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/todo" component={Todolist} />
      <Route path="/About" component={AboutPage} />
      <Route path="/Partners" component={PartnersPage} />      
      <Route path="/Teams" component={TeamsPage} />      
      <Route path="/News" component={NewsPage} />      
      <Route path="/Events" component={EventsPage} />      
      <Route path="/ContactUs" component={ContactUsPage} />      
    </Switch>
  )
}