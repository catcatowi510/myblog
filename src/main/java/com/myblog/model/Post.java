package com.myblog.model;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String image;

    @Column(columnDefinition = "TEXT")
    private String content;

    private int published = 1;
    
    private String createdBy = "Admin";
    private LocalDateTime createdAt = LocalDateTime.now();
    private String updatedBy = "Admin";
    private LocalDateTime updatedAt;
    private String langues;
    // ===== BẮT BUỘC =====
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public String getLangues() {
        return langues;
    }
    public String getImage() {
        return image;
    }
    public String getContent() {
        return content;
    }
}