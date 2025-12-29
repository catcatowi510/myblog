package com.myblog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myblog.model.Certificate;
import com.myblog.repository.CertificateRepository;

@Service
public class CertificateService {
    @Autowired
    private CertificateRepository certificateRepository;

    public List<Certificate> getAll() {
        return certificateRepository.findAllByOrderByIdDesc();
    }
}
