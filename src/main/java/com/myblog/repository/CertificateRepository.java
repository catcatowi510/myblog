package com.myblog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myblog.model.Certificate;

public interface CertificateRepository extends JpaRepository<Certificate, Long> {

    List<Certificate> findAllByOrderByIdDesc();
}