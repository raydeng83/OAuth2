package com.ldeng.client;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Map;

/**
 * Created by lede on 9/2/16.
 */

@Controller
public class HomeController {

    @RequestMapping("/")
    public String home() {
        return "index";
    }

    @RequestMapping("/authCode")
    public String showAuthCode(@RequestParam("code") String authCode, Model model) {
        System.out.println(authCode);

        model.addAttribute("authCode", authCode);

        return "index";
    }

    @RequestMapping("/token")
    public String showAccessToken(@RequestBody Map<String, String> tokenInfo, Model model) {
        String token = tokenInfo.get("access_token");

        model.addAttribute("token", token);

        return "index";
    }

}
