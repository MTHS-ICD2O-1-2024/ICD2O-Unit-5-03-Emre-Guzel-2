
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Emre Guzel
// Created on: April 22 2025
// This file contains the JS functions for index.html

"use strict"

function pgNumberCalculator() {
  // Setting the veribals
  const age = document.getElementById("age").value
  
  if (age>=17){
    document.getElementById("result") + age + "you can watch R-rated movies  "
  }
  else if (age>=17) {
    document.getElementById("result") + age + "You can watch a g or pg movie"
  }
}
