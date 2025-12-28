package com.myblog.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.myblog.model.Post;
import com.myblog.repository.PostRepository;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAll() {
        return postRepository.findByPublishedTrueOrderByCreatedAtDesc();
    }

    public Post getById(Long id) {
        return postRepository.findByIdAndPublishedTrue(id)
                .orElseThrow(() -> new RuntimeException("Post not found"));
    }

    public Post getNextPost(Long id) {
        return postRepository
                .findFirstByPublishedTrueAndIdAfterOrderByCreatedAtAsc(id);
    }

    public Post getPreviousPost(Long id) {
        return postRepository
                .findFirstByPublishedTrueAndIdBeforeOrderByCreatedAtDesc(
                        id);
    }

    public Post save(Post post) {
        return postRepository.save(post);
    }
}
