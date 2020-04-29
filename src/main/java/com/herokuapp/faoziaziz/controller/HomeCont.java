package com.herokuapp.faoziaziz.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


/*
* @author: Aziz Faozi
*/

@Controller
public class HomeCont {

    @RequestMapping(value="/")

    public String index(){

        return "index";

    }


}
