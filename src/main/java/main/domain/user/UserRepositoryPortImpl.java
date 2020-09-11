package main.domain.user;

import main.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserRepositoryPortImpl implements UserRepositoryPort {

    @Autowired
    UserRepository userRepository;

    @Override
    public User findByEmail(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);
        if (optionalUser.isEmpty()) {
            return null;
        }
        return optionalUser.get();
    }

    @Override
    public User findByCode(String code) {
        Optional<User> optionalUser = userRepository.findByCode(code);
        if (optionalUser.isEmpty()) {
            return null;
        }
        return optionalUser.get();
    }


    @Override
    public User findById(int userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            return null;
        }
        return optionalUser.get();
    }

    @Override
    public void save(User user) {
        userRepository.save(user);
    }

}
