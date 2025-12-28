package com.myblog.controller;

import java.util.HashMap;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.myblog.model.Message;
import com.myblog.service.MessageService;

@Controller
@RequestMapping("/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @PostMapping("/add")
    @ResponseBody
    public ResponseEntity<?> addMessage(@RequestBody Message message) {
        System.out.println("=== ADD POST ===");
        System.out.println("Title: " + message.getFullName());
        System.out.println("Content: " + message.getEmail());
        messageService.save(message);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Gửi tin nhắn thành công!");

        return ResponseEntity.ok(response);
    }
}