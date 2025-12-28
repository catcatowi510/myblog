package com.myblog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.myblog.service.PostService;

@Controller
public class HomeController {

    @Autowired
    private PostService postService;

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("posts", postService.getAll());
        model.addAttribute("page", "home");
        return "index";
    }

    @GetMapping("/post/{id}")
    public String detail(@PathVariable Long id, Model model) {
        model.addAttribute("post", postService.getById(id));
        model.addAttribute("prevPost", postService.getPreviousPost(id));
        model.addAttribute("nextPost", postService.getNextPost(id));
        model.addAttribute("page", "post");
        return "post-detail";
    }
}