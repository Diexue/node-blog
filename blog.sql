/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50549
Source Host           : localhost:3306
Source Database       : duer

Target Server Type    : MYSQL
Target Server Version : 50549
File Encoding         : 65001

Date: 2016-11-03 01:14:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blog
-- ----------------------------
DROP TABLE IF EXISTS `blog`;
CREATE TABLE `blog` (
  `bid` int(11) NOT NULL AUTO_INCREMENT COMMENT '博客ID',
  `title` varchar(255) NOT NULL COMMENT '博客标题',
  `intro` text COMMENT '博客介绍',
  `path` varchar(255) NOT NULL COMMENT '博客路径',
  `time` date NOT NULL COMMENT '发布时间',
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog
-- ----------------------------
INSERT INTO `blog` VALUES ('1', '猫喜欢被人养吗？', '婴儿时期的人类和哺乳动物，都存在着比较类似的外表特点：较大的头身比（婴儿头身比大约为1:3，成人为1:7），又圆又大的眼睛，粗短的四肢，以及柔软的皮肤或绒毛——总而言之，就是“短圆软暖”四个字。一亿年来的进化赋予了幼小哺乳动物这些卖萌的特征，主要是为了能够获得母亲的爱抚，以及在失去母亲时可能得到其他雌性动物的哺育，从而获得更大的生存几率。', 'simulated/article/001.md', '2016-10-28');
INSERT INTO `blog` VALUES ('2', '怎样评价尤瓦尔·赫拉力的《人类简史》？', '早在历史纪录出现前，250万年前就出现了类似现代人类的动物，如果你穿越到200万年前的东非看，你会看见一群很像人类的生物：有些妈妈一边哄着小婴儿，一边还得把玩疯的小孩抓回来，忙得团团转；有些肌肉猛男捶着自己的胸膛，只希望旁边的美女能够垂青；也有年长的智慧大家长，对这早已习以为常。', 'simulated/article/002.md', '2016-08-12');
INSERT INTO `blog` VALUES ('3', '为什么罗素等人当年需要证明“1+1=2”？', '“为什么1+1=2？”，我眉头紧皱，抚案沉思，答案涌上心头，“存在即合理”，不叫1+1=2，也会叫a+b=c，到时候就会有人来问“为什么a+b=c”。', 'simulated/article/003.md', '2016-11-01');
INSERT INTO `blog` VALUES ('4', '有哪些数学理论看上去肯定没有应用价值，但其实应用价值很大？', '数学是这样的，大量数学工具，在被创造出来的时候都是屁用没有。过了很久以后，突然在理科/工科/甚至一些社会学科里面发现，哎这个问题用以前有个深井冰发明的这个工具来处理简直太方便了。', 'simulated/article/004.md', '2016-11-03');
INSERT INTO `blog` VALUES ('5', '二维傅里叶变换是怎么进行的？', 'F(u,v) =\\\\int_{-\\\\infty}^{+\\\\infty}\\\\int_{-\\\\infty}^{+\\\\infty}f(x,y)e^{-j2\\\\pi(ux+vy)}dxdy上式为连续情形下的傅立叶变换，具体的积分区间取决于函数f(x,y)的定义域。x，y的积分顺序可交换，因此，对f(x,y)做2D FT实际上相当于对两个方向分别作1D FT。此外，FT的一大特点就是它是线性变换，即信号f_1,f_2线性组合的FT等于它们各自FT的线性组合。', 'simulated/article/005.md', '2016-11-08');
INSERT INTO `blog` VALUES ('6', '数学里的 e 为什么叫做自然底数？是不是自然界里什么东西恰好是 e？', '数学是这样的，大量数学工具，在被创造出来的时候都是屁用没有。过了很久以后，突然在理科/工科/甚至一些社会学科里面发现，哎这个问题用以前有个深井冰发明的这个工具来处理简直太方便了。', 'simulated/article/006.md', '2016-11-23');

-- ----------------------------
-- Table structure for blogtags
-- ----------------------------
DROP TABLE IF EXISTS `blogtags`;
CREATE TABLE `blogtags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `blogId` int(11) NOT NULL,
  `tagId` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blogtags
-- ----------------------------
INSERT INTO `blogtags` VALUES ('1', '1', '18');
INSERT INTO `blogtags` VALUES ('2', '1', '20');
INSERT INTO `blogtags` VALUES ('3', '1', '21');
INSERT INTO `blogtags` VALUES ('4', '2', '18');
INSERT INTO `blogtags` VALUES ('5', '3', '3');
INSERT INTO `blogtags` VALUES ('6', '3', '22');
INSERT INTO `blogtags` VALUES ('7', '4', '3');
INSERT INTO `blogtags` VALUES ('8', '4', '23');
INSERT INTO `blogtags` VALUES ('9', '5', '3');
INSERT INTO `blogtags` VALUES ('10', '5', '24');
INSERT INTO `blogtags` VALUES ('11', '6', '3');
INSERT INTO `blogtags` VALUES ('12', '6', '25');

-- ----------------------------
-- Table structure for reply
-- ----------------------------
DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply` (
  `replyId` int(11) NOT NULL AUTO_INCREMENT COMMENT '回复表ID',
  `blogId` int(11) NOT NULL,
  `replyerId` int(11) NOT NULL,
  `replyedId` int(11) NOT NULL,
  `replyTime` datetime NOT NULL,
  `content` text NOT NULL,
  PRIMARY KEY (`replyId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of reply
-- ----------------------------

-- ----------------------------
-- Table structure for replyer
-- ----------------------------
DROP TABLE IF EXISTS `replyer`;
CREATE TABLE `replyer` (
  `userId` int(11) NOT NULL,
  `username` char(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `registerTime` datetime NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of replyer
-- ----------------------------

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '标签ID',
  `tag` char(10) NOT NULL COMMENT '标签名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tags
-- ----------------------------
INSERT INTO `tags` VALUES ('1', 'jQuery');
INSERT INTO `tags` VALUES ('2', 'JavaScript');
INSERT INTO `tags` VALUES ('3', '数学');
INSERT INTO `tags` VALUES ('4', '黑金属');
INSERT INTO `tags` VALUES ('5', 'AngularJS');
INSERT INTO `tags` VALUES ('6', '数据库');
INSERT INTO `tags` VALUES ('7', '哲学');
INSERT INTO `tags` VALUES ('8', 'NodeJS');
INSERT INTO `tags` VALUES ('9', 'D3js');
INSERT INTO `tags` VALUES ('10', 'HTML5');
INSERT INTO `tags` VALUES ('11', 'CSS3');
INSERT INTO `tags` VALUES ('12', 'ReactJS');
INSERT INTO `tags` VALUES ('13', '电影');
INSERT INTO `tags` VALUES ('14', '音乐');
INSERT INTO `tags` VALUES ('15', '艺术');
INSERT INTO `tags` VALUES ('16', '工程学');
INSERT INTO `tags` VALUES ('17', '建筑');
INSERT INTO `tags` VALUES ('18', '进化论');
INSERT INTO `tags` VALUES ('19', 'MatLab');
INSERT INTO `tags` VALUES ('20', '猫');
INSERT INTO `tags` VALUES ('21', '哺乳动物');
INSERT INTO `tags` VALUES ('22', '罗素');
INSERT INTO `tags` VALUES ('23', '应用数学');
INSERT INTO `tags` VALUES ('24', '傅里叶变换');
INSERT INTO `tags` VALUES ('25', '自然底数');
