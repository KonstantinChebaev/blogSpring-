package main.domain.post;

import main.domain.post.Post;
import java.util.List;
import java.util.Optional;

public interface PostRepositoryPort {
    Optional<Post> findByTitle(String title);
    Optional<Post> findById(int postId);

    List<Post> findAll();
    List<Post> findAllGood();

    void addPost(Post post);
    void savePost(Post post);

}