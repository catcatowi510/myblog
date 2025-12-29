package com.myblog.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "certificates")
public class Certificate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String issuer;
    private String date;
    private String image;
    private String placeholder;
    // ===== BẮT BUỘC =====
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getIssuer() {
        return issuer;
    }

    public String getDate() {
        return date;
    }
    public String getImage() {
        return image;
    }
    public String getPlaceholder() {
        return placeholder;
    }
}