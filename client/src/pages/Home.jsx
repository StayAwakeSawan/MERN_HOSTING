import React, { Fragment, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { toast } from "react-hot-toast";
import http from "../services";
import getHomeStatsApi from "../services/home/getHomeStatsApi";
import { setUserData } from "../utils/authStorage.utils";
import { useDispatch, useSelector } from "react-redux";
import { setData, increment } from "../redux/user/userSlice";

function Home() {
  // ? conditional chaining

  return <div>Home</div>;
}

export default Home;
