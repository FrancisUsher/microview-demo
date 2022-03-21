import { Container, Box, Paper, Tabs, Tab } from "@mui/material";
import React from "react";
import { Routes, Route, Link, useParams } from "react-router-dom";

export default function TabMenuTabs({ tabName }) {
  return <Tabs value={tabName}></Tabs>;
}
