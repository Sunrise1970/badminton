<template>
  <div class="rule-wrap ui-common-pd-tb">
    <ui-head title="比赛规则"></ui-head>
    <div class="ui-common-box ui-whitespace-p">
      <div class="ui-info-head">预选赛</div>
      <p class="ui-common-pd ui-border-radius ui-border-shadow ui-text-indent">
        男单、女单、男双、女双、混双根据抽签决定对赛场次，实行单淘汰赛制(3局2胜)，每局21分（一球一分），采用每球得分制。男单、女单、男双、女双、混双各通过预选赛淘汰至2组选手进入半决赛。
      </p>
      <div class="ui-info-head">半决赛</div>
      <p class="ui-common-pd ui-border-radius ui-border-shadow ui-text-center">
        男单、女单、男双、女双、混双根据抽签决定对赛场次，实行单淘汰赛制(3局2胜)，每局21分（一球一分），采用每球得分制。最终获胜的两支队伍进入决赛。
      </p>
      <div class="ui-info-head">总决赛</div>
      <p class="ui-common-pd ui-border-radius ui-border-shadow ui-text-center">
        男单、女单、男双、女双、混双胜出的两队决赛，实行积分赛制（3局2胜），每局21分，采用每球得分制。决出冠亚军。
      </p>
      <div class="ui-info-head">发球区域</div>
      <div class="ui-common-pd ui-border-radius ui-border-shadow ui-text-center">
        <ul>
          <li>单打发球有效区域为下图中的蓝色区域</li>
          <li>双打发球有效区域为下图中的绿色区域</li>
        </ul>
        <div class="ui-common-mg-tb">
          <img src="../../assets/faqiu.png" alt="" />
        </div>
      </div>
      <div class="ui-info-head">半场边线</div>
      <div class="ui-common-pd ui-border-radius ui-border-shadow ui-text-center">
        <ul>
          <li>单打时，半场边线有效范围是下图中的蓝色区域</li>
          <li>双打时，半场边线有效范围是下图中的绿色区域</li>
        </ul>
        <div class="ui-common-mg-tb">
          <img src="../../assets/youxiao.png" alt="" />
        </div>
      </div>
      <div class="ui-info-head">计分</div>
      <div class="ui-common-pd ui-border-radius ui-border-shadow">
        <ul>
          <li>1. 21 分制，3局2胜</li>
          <li>2. 每球得分制</li>
          <li>3. 每回合中，取胜的一方加 1 分 </li>
          <li>4. 当双方均为 20 分时，领先对方 2 分的一方赢得该局比赛 </li>
          <li>5. 当双方均为 29 分时，先取得 30 分的一方赢得该局比赛 </li>
          <li>6. 一局比赛的获胜方在下一局率先发球</li>
        </ul>
      </div>
      <div class="ui-info-head">休息与换边</div>
      <div class="ui-common-pd ui-border-radius ui-border-shadow">
        <ul>
          <li>1. 在一局比赛中，当领先的一方达到 11 分时，双方有 60 秒休息时间</li>
          <li>2. 在两局比赛间，双方有 2 分钟的休息时间</li>
          <li>3. 在决胜局的中，当领先的一方达到 11 分时，双方交换场地</li>
        </ul>
      </div>
      <div class="ui-info-head">单打规则</div>
      <div class="ui-common-pd ui-border-radius ui-border-shadow">
        <ul>
          <li>1. 在一局比赛开始时（比分 0 ： 0）或发球方得分为偶数时，发球方在右半场进行发球。当发球方得分为奇数时，在左半场进行发球</li>
          <li>2. 如果发球方取得一分，那么下一回合其继续发球</li>
          <li>3. 如果接发球方取得一分，那么下一回合其成为发球方</li>
        </ul>
      </div>
      <div class="ui-info-head">双打规则</div>
      <div class="ui-common-pd ui-border-radius ui-border-shadow">
        <ul>
          <li>1. 与单打一样，发球方得分为偶数时，发球方在右半场进行发球。当发球方得分为奇数时，在左半场进行发球</li>
          <li>2. 如果发球方取得一分，那么下一回合其继续发球，且发球人不变</li>
          <li>3. 如果接发球方取得一分，那么下一回合其成为发球方</li>
          <li>4. 当且仅当发球方得分时，发球方的两位选手交换左右半场</li>
        </ul>
      </div>
      <div class="ui-info-head">双打图解</div>
      <p class="ui-text-indent">
        下面描述一场 羽毛球双打比赛 ，A & B vs C & D，比赛开始时，由A率先发球，C接发球
      </p>
      <div class="ui-common-pd-tb ui-border-radius ui-border-shadow ui-text-center">
        <table>
          <thead>
            <tr>
              <td style="width:40%;">
                说明
              </td>
              <td style="width:15%;">
                发球区
              </td>
              <td style="width:15%;">
                发接球
              </td>
              <td style="width:5%;">
                分
              </td>
              <td style="width:5%;">
                胜
              </td>
              <td style="width:20%;">
                图解
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                比赛开始
              </td>
              <td>
                右侧半场
              </td>
              <td>
                A发球<br />C接发球
              </td>
              <td>
                0 <br /> - <br />0
              </td>
              <td>
                A<br /> & <br />B
              </td>
              <td>
                <img src="../../assets/yumaoqiu1.gif" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                A & B 得一分，<br />A & B 将换边， <br />A在左侧半场继续发球， <br />C & D 保持各自所在半场不变。
              </td>
              <td>
                左侧半场
              </td>
              <td>
                A发球<br />D接发球
              </td>
              <td>
                1<br /> - <br />0
              </td>
              <td>
                C<br /> & <br />D
              </td>
              <td>
                <img src="../../assets/yumaoqiu2.gif" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                C & D 得一分，<br />A B C D 均保持各自所在半场不变。
              </td>
              <td>
                左侧半场
              </td>
              <td>
                D发球<br />A接发球
              </td>
              <td>
                1<br /> - <br />1
              </td>
              <td>
                A<br /> & <br />B
              </td>
              <td>
                <img src="../../assets/yumaoqiu3.gif" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                A & B 得一分，<br />在右半场发球，<br />A B C D 均保持各自所在半场不变。
              </td>
              <td>
                右侧半场
              </td>
              <td>
                B发球<br />C接发球
              </td>
              <td>
                2<br /> - <br />1
              </td>
              <td>
                C<br /> & <br />D
              </td>
              <td>
                <img src="../../assets/yumaoqiu4.gif" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                C & D 得一分，<br />在右半场发球，<br />A B C D 均保持各自所在半场不变。
              </td>
              <td>
                右侧半场
              </td>
              <td>
                C发球<br />B接
              </td>
              <td>
                2<br /> - <br />2
              </td>
              <td>
                C<br /> & <br />D
              </td>
              <td>
                <img src="../../assets/yumaoqiu5.gif" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                C & D 得一分，<br /> C & D 将换边，<br /> C 在左侧半场继续发球， <br />A & B 保持各自所在半场不变。
              </td>
              <td>
                左侧半场
              </td>
              <td>
                C发球<br />A接发球
              </td>
              <td>
                2<br /> - <br />3
              </td>
              <td>
                A<br /> & <br />B
              </td>
              <td>
                <img src="../../assets/yumaoqiu6.gif" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                A & B 得一分，<br />在左半场发球，<br />A B C D 均保持各自所在半场不变。
              </td>
              <td>
                左侧半场
              </td>
              <td>
                A发球<br />C接发球
              </td>
              <td>
                3<br /> - <br />3
              </td>
              <td>
                A<br /> & <br />B
              </td>
              <td>
                <img src="../../assets/yumaoqiu7.gif" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                A & B 得一分，<br />A & B 将换边， <br />A在右侧半场继续发球， <br />C & D 保持各自所在半场不变。
              </td>
              <td>
                右侧半场
              </td>
              <td>
                A发球<br />D接发球
              </td>
              <td>
                4<br /> - <br />3
              </td>
              <td>
                C<br /> & <br />D
              </td>
              <td>
                <img src="../../assets/yumaoqiu8.gif" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="ui-info-head">发球违例</div>
      <div class="ui-common-pd ui-border-radius ui-border-shadow">
        <ul>
          <li>1. 未将球发在相应的区域内</li>
          <li>2. 球挂在网上或停在网顶</li>
          <li>3. 球过网后挂在网上</li>
          <li>4. 双打时，接发球员的同伴接到球或被球触及</li>
        </ul>
      </div>
      <div class="ui-info-head">进行中违例</div>
      <div class="ui-common-pd ui-border-radius ui-border-shadow">
        <ul>
          <li>1. 球落在场地界线外</li>
          <li>2. 球从网孔或网下穿过</li>
          <li>3. 球未从网上方越过</li>
          <li>4. 球触及天花板或四周墙壁</li>
          <li>5. 球触及运动员的身体或衣服</li>
          <li>6. 球触及场地外其他物体或人</li>
          <li>7. 球被击时停滞在球拍上，紧接着被拖带抛出</li>
          <li>8. 球在一个回合中被同一方队员多次击中</li>
          <li>9. 运动员的球拍、身体或衣服，触及球网或球网的支撑物</li>
          <li>10.过网击球(击球时，球拍与球的最初接触点在击球者网这一方，而后球拍随球过网的情况除外)</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import uiHead from '../common/head'
export default {
  components: {
    uiHead
  }
}
</script>

<style lang="scss">
.rule-wrap li {
  line-height: 0.64rem;
}
.rule-wrap td {
  padding: 0.05333333333333334rem;
  border: 1px solid #ddd;
}
.rule-wrap td img {
  display: inline-block;
  width: 80%;
  height: auto;
  vertical-align: middle;
}
</style>
