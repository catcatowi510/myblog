package com.myblog.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.myblog.model.Post;
import com.myblog.service.PostService;

@Controller
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private PostService postService;

    @GetMapping("/dashboard")
    public String dashboard(Model model) {
        model.addAttribute("posts", postService.getAll());
        return "admin/dashboard";
    }

    @PostMapping("/add")
    public String addPost(@RequestParam String title,
                          @RequestParam String content) {
        Post post = new Post();
        postService.save(post);
        return "redirect:/admin/dashboard";
    }
}