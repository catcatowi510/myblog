package com.myblog.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.myblog.model.Post;

public interface PostRepository extends JpaRepository<Post, Long> {

    List<Post> findByPublishedTrueOrderByCreatedAtDesc();

    Optional<Post> findByIdAndPublishedTrue(Long id);

    Post findFirstByPublishedTrueAndIdAfterOrderByCreatedAtAsc(Long id);

    Post findFirstByPublishedTrueAndIdBeforeOrderByCreatedAtDesc(Long id);
}