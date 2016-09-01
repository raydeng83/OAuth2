package com.ldeng.authserver;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by lede on 9/1/16.
 */

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "index.html";
    }
}
