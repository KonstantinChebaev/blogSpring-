package main.domain;

import main.domain.post.PostRepositoryPort;
import main.domain.post.VotesService;
import main.domain.user.User;
import main.domain.user.UserServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;

@Service
public class StatisticServise {

    @Autowired
    PostRepositoryPort postRepositoryPort;

    @Autowired
    VotesService votesService;

    @Autowired
    UserServise userServise;


    public StatisticsDto getStatistics(String statType, HttpServletRequest request) {
        User user = null;
        if(statType.equals("my")){
            user = userServise.getCurrentUser(request);
        }
        StatisticsDto statisticsDto = new StatisticsDto();
        statisticsDto.setPostsCount(postRepositoryPort.countByUser(user));
        statisticsDto.setLikesCount(votesService.countByUserAndValue(user, "LIKE"));
        statisticsDto.setDislikesCount(votesService.countByUserAndValue(user, "DISLIKE"));
        statisticsDto.setViewsCount(postRepositoryPort.countViewsByUser(user));
        statisticsDto.setFirstPublication(postRepositoryPort.getFirstPostDate(user));
        return statisticsDto;
    }
}