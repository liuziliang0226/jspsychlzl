let jsPsych = initJsPsych()

let welcome = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:`
<p style="font-family: Arial, sans-serif; font-size: 18px; line-height: 1.6; color: #fff;">  
    <div style="display: flex; align-items: center; justify-content: center; margin-bottom: 20px;">  
        <span style="color: #ff5722; font-size: 24px; font-weight: bold;">这是一个压力测试实验!</span>  
    </div>  
    <span style="font-weight: bold;">实验介绍：</span>  
    在这个简短的测试中，我们将探究您对提示词的内在反应。 <span style="color: #ff5722;"></span> 

    <div style="font-weight: bold;margin-left: 162px">实验流程：
    接下来，您将看到一系列<span style="color: #007bff;">单词或图片</span>  ，它们将以快速连续的方式展示在屏幕上。<br/>  
    您的任务是根据屏幕上的指示，使用键盘上的特定键来对这些单词或图片进行分类。  
    请尽可能快速准确地完成分类任务。  
    </div>
    <span style="font-weight: bold;margin-left: 250px">实验时长：</span>  
    整个实验过程大约需要<span style="color: #28a745;">10分钟左右</span>。     
    <span style="font-size: 20px; font-weight: bold; color: #ffc107; text-align: center; display: block; margin-top: 20px;">  
        开始实验：当您准备好开始实验时，请按任意键继续。  
    </span>  
</p>`,
};


/*任务1（练习）：初始靶词辨别*/
let instruction1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size:20px;color:black;font-weight:bold;line-height:40px">在接下来的实验中，<br>如果你看到的是“焦虑”有关的词（比如“焦急”），请按“<span style="color:red;">f</span>”键。<br>如果你看到的是“轻松”有关的词（比如“愉悦”），请按“<span style="color:red;">j</span>”键。<br>如果你已经准备好了，请按“空格”开始实验。</p>',
  choices: [' '],

}

let trial_block1 = {
  type: jsPsychHtmlKeyboardResponse,
  timeline: [
    { stimulus: '<p style="font-size:50px; color:red; font-weight:bold;">+</p>', choices: 'NO_KEYS', trial_duration: 300 },
    { stimulus: jsPsych.timelineVariable('content'), prompt: '<p style="font-size:20px;color:grey;">“焦虑”相关：按“<span style="color:red;">f</span>”键。&nbsp“轻松”相关：按“<span style="color:red;">j</span>”键。</p>', choices: ['f', 'j'], trial_duration: 3000 },
  ],
  timeline_variables: [
    { content: '搔头抓耳' },
    { content: '搔头抓耳' },
    { content: '忧心如捣' },
    { content: '焦心' },
    { content: '焦灼' },
    { content: '镇定' },
    { content: '平静' },
    { content: '安详' },
    { content: '愉悦' },
    { content: '坦然' },
  ],
  randomize_order: true,

};

/*任务2（练习）：属性图辨别*/
let instruction2 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size:20px;color:black;font-weight:bold;line-height:40px">在接下来的实验中，<br>如果你看到的是“焦虑”图片，请按“<span style="color:red;">f</span>”键。<br>如果你看到的是“轻松”图片（比如风景图），请按“<span style="color:red;">j</span>”键。<br>如果你已经准备好了，请按“q”开始实验。</p>',
  choices: ['q'],
}

let trial_block2 = {
  type: jsPsychHtmlKeyboardResponse,
  timeline: [
    { stimulus: '<p style="font-size:50px; color:red; font-weight:bold;">+</p>', choices: 'NO_KEYS', trial_duration: 300 },
    { stimulus: jsPsych.timelineVariable('content'), prompt: '<p style="font-size:20px;color:grey;">焦虑图片：按<span style="color:red;">"f"</span>键。&nbsp轻松图片：按<span style="color:red;">"j"</span>键。</p>', choices: ['f', 'j'], trial_duration: 3000 },
  ],
  timeline_variables: [
    { content: '<img src="./image/neutral_1.png">' },
    { content: '<img src="./image/neutral_2.png">' },
    { content: '<img src="./image/neutral_3.png">' },
    { content: '<img src="./image/neutral_4.png">' },
    { content: '<img src="./image/neutral_5.png">' },
    { content: '<img src="./image/neutral_6.png">' },
    { content: '<img src="./image/neutral_7.png">' },
    { content: '<img src="./image/stress_1.png">' },
    { content: '<img src="./image/stress_2.png">' },
    { content: '<img src="./image/stress_3.png">' },
    { content: '<img src="./image/stress_4.png">' },
    { content: '<img src="./image/stress_5.png">' },
    { content: '<img src="./image/stress_6.png">' },
    { content: '<img src="./image/stress_7.png">' },
  ],
  randomize_order: true,

};

/*任务3（练习）：初始联合任务辨别*/
let instruction3 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size:20px;color:black;font-weight:bold;line-height:40px">在接下来的实验中，<br>如果你看到的是“焦虑”有关的词（比如“焦急”）或“焦虑”图片，请按“<span style="color:red;">f</span>”键。<br>如果你看到的是“轻松”有关的词（比如“愉悦”）或“轻松”图片（比如风景图），请按“<span style="color:red;">j</span>”键。<br>如果你已经准备好了，请按“q”开始实验。</p>',
  choices: ['q'],
}

let trial_block3 = {
  type: jsPsychHtmlKeyboardResponse,
  timeline: [
    { stimulus: '<p style="font-size:50px; color:red; font-weight:bold;">+</p>', choices: 'NO_KEYS', trial_duration: 300 },
    { stimulus: jsPsych.timelineVariable('content'), prompt: '<p style="font-size:20px;color:grey;">“焦虑”相关或压力图片：按<span style="color:red;">"f"</span>键。<br>“轻松”相关图片：按<span style="color:red;">"j"</span>键。</p>', choices: ['f', 'j'], trial_duration: 3000 },
  ],
  timeline_variables: [
    { content: '<img src="./image/neutral_1.png">' },
    { content: '<img src="./image/neutral_2.png">' },
    { content: '<img src="./image/neutral_3.png">' },
    { content: '<img src="./image/neutral_4.png">' },
    { content: '<img src="./image/neutral_5.png">' },
    { content: '<img src="./image/neutral_6.png">' },
    { content: '<img src="./image/neutral_7.png">' },
    { content: '<img src="./image/stress_1.png">' },
    { content: '<img src="./image/stress_2.png">' },
    { content: '<img src="./image/stress_3.png">' },
    { content: '<img src="./image/stress_4.png">' },
    { content: '<img src="./image/stress_5.png">' },
    { content: '<img src="./image/stress_6.png">' },
    { content: '<img src="./image/stress_7.png">' },
    { content: '搔头抓耳' },
    { content: '搔头抓耳' },
    { content: '忧心如捣' },
    { content: '焦心' },
    { content: '焦灼' },
    { content: '镇定' },
    { content: '平静' },
    { content: '安详' },
    { content: '愉悦' },
    { content: '坦然' },
  ],
  randomize_order: true,

};
/*任务4（正式实验）：初始联合任务辨别*/
let instruction4 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size:20px;color:black;font-weight:bold;line-height:40px">在接下来的实验中，<br>如果你看到的是“焦虑”有关的词（比如“焦急”）或“焦虑”图片，请按“<span style="color:red;">f</span>”键。<br>如果你看到的是“轻松”有关的词（比如“愉悦”）或“轻松”图片（比如风景图），请按“<span style="color:red;">j</span>”键。<br>如果你已经准备好了，请按“q”开始实验。</p>',
  choices: ['q'],
}

let trial_block4 = {
  type: jsPsychHtmlKeyboardResponse,
  timeline: [
    { stimulus: '<p style="font-size:50px; color:red; font-weight:bold;">+</p>', choices: 'NO_KEYS', trial_duration: 300 },
    { stimulus: jsPsych.timelineVariable('content'), prompt: '<p style="font-size:20px;color:grey;">“焦虑”相关或压力图片：按<span style="color:red;">"f"</span>键。<br>“轻松”相关图片：按<span style="color:red;">"j"</span>键。</p>', choices: ['f', 'j'], trial_duration: 3000 },
  ],
  timeline_variables: [
    { content: '<img src="./image/neutral_1.png">' },
    { content: '<img src="./image/neutral_2.png">' },
    { content: '<img src="./image/neutral_3.png">' },
    { content: '<img src="./image/neutral_4.png">' },
    { content: '<img src="./image/neutral_5.png">' },
    { content: '<img src="./image/neutral_6.png">' },
    { content: '<img src="./image/neutral_7.png">' },
    { content: '<img src="./image/stress_1.png">' },
    { content: '<img src="./image/stress_2.png">' },
    { content: '<img src="./image/stress_3.png">' },
    { content: '<img src="./image/stress_4.png">' },
    { content: '<img src="./image/stress_5.png">' },
    { content: '<img src="./image/stress_6.png">' },
    { content: '<img src="./image/stress_7.png">' },
    { content: '搔头抓耳' },
    { content: '搔头抓耳' },
    { content: '忧心如捣' },
    { content: '焦心' },
    { content: '焦灼' },
    { content: '镇定' },
    { content: '平静' },
    { content: '安详' },
    { content: '愉悦' },
    { content: '坦然' },
  ],
  randomize_order: true,
  on_finish: function () {
    console.log(jsPsych.data.get().values());
  }
};

let break1 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size:20px;color:black;line-height:30px">第一阶段的实验结束，<br>请休息一分钟后再开始第二阶段的实验,<br>如果不需要休息，请按“<span style="color:red;">q</span>”键继续实验</p>',
  choices: 'q',
  on_load: function () {
    let elem = document.createElement('p');
    elem.innerHTML = '60';

    document.querySelector('#jspsych-content').appendChild(elem);
    let time_left = 60;
    let timer = setInterval(function () {
      time_left--;
      if (time_left > 0) {
        elem.innerHTML = time_left;
      }
    }, 1000);
  }
};
/*任务5（练习）：相反属性图辨别*/
let instruction5 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size:20px;color:black;font-weight:bold;line-height:40px">在接下来的实验中，<br>如果你看到的是“轻松”图片（比如风景图），请按“<span style="color:red;">f</span>”键。<br>如果你看到的是“焦虑”图片，请按“<span style="color:red;">j</span>”键。<br>如果你已经准备好了，请按“q”开始实验。</p>',
  choices: ['q'],
}

let trial_block5 = {
  type: jsPsychHtmlKeyboardResponse,
  timeline: [
    { stimulus: '<p style="font-size:50px; color:red; font-weight:bold;">+</p>', choices: 'NO_KEYS', trial_duration: 300 },
    { stimulus: jsPsych.timelineVariable('content'), prompt: '<p style="font-size:20px;color:grey;">轻松图片：按<span style="color:red;">"f"</span>键。&nbsp焦虑图片：按<span style="color:red;">"j"</span>键。</p>', choices: ['f', 'j'], trial_duration: 3000 },
  ],
  timeline_variables: [
    { content: '<img src="./image/neutral_1.png">' },
    { content: '<img src="./image/neutral_2.png">' },
    { content: '<img src="./image/neutral_3.png">' },
    { content: '<img src="./image/neutral_4.png">' },
    { content: '<img src="./image/neutral_5.png">' },
    { content: '<img src="./image/neutral_6.png">' },
    { content: '<img src="./image/neutral_7.png">' },
    { content: '<img src="./image/stress_1.png">' },
    { content: '<img src="./image/stress_2.png">' },
    { content: '<img src="./image/stress_3.png">' },
    { content: '<img src="./image/stress_4.png">' },
    { content: '<img src="./image/stress_5.png">' },
    { content: '<img src="./image/stress_6.png">' },
    { content: '<img src="./image/stress_7.png">' },
  ],
  randomize_order: true,

};
/*任务6（练习）：相反联合任务辨别*/
let instruction6 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size:20px;color:black;font-weight:bold;line-height:40px">在接下来的实验中，<br>如果你看到的是“自我”有关的词（比如“我的”）或“中性”图片（比如风景图），请按“<span style="color:red;">f</span>”键。<br>如果你看到的是“他人”有关的词（比如“他的”）或“压力”图片，请按“<span style="color:red;">j</span>”键。<br>如果你已经准备好了，请按“q”开始实验。</p>',
  choices: ['q'],
}

let trial_block6 = {
  type: jsPsychHtmlKeyboardResponse,
  timeline: [
    { stimulus: '<p style="font-size:50px; color:red; font-weight:bold;">+</p>', choices: 'NO_KEYS', trial_duration: 300 },
    { stimulus: jsPsych.timelineVariable('content'), prompt: '<p style="font-size:20px;color:grey;">“焦虑”相关图片：按<span style="color:red;">"f"</span>键。<br>“轻松”相关图片：按<span style="color:red;">"j"</span>键。</p>', choices: ['f', 'j'], trial_duration: 3000 },
  ],
  timeline_variables: [
    { content: '<img src="./image/neutral_1.png">' },
    { content: '<img src="./image/neutral_2.png">' },
    { content: '<img src="./image/neutral_3.png">' },
    { content: '<img src="./image/neutral_4.png">' },
    { content: '<img src="./image/neutral_5.png">' },
    { content: '<img src="./image/neutral_6.png">' },
    { content: '<img src="./image/neutral_7.png">' },
    { content: '<img src="./image/stress_1.png">' },
    { content: '<img src="./image/stress_2.png">' },
    { content: '<img src="./image/stress_3.png">' },
    { content: '<img src="./image/stress_4.png">' },
    { content: '<img src="./image/stress_5.png">' },
    { content: '<img src="./image/stress_6.png">' },
    { content: '<img src="./image/stress_7.png">' },
    { content: '搔头抓耳' },
    { content: '搔头抓耳' },
    { content: '忧心如捣' },
    { content: '焦心' },
    { content: '焦灼' },
    { content: '镇定' },
    { content: '平静' },
    { content: '安详' },
    { content: '愉悦' },
    { content: '坦然' },
  ],
  randomize_order: true,

};

/*任务7（正式实验）：相反联合任务辨别*/
let instruction7 = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: '<p style="font-size:20px;color:black;font-weight:bold;line-height:40px">在接下来的实验中，<br>如果你看到的是“焦虑”有关的词（比如“焦急”）或“轻松”图片（比如风景图），请按“<span style="color:red;">f</span>”键。<br>如果你看到的是“轻松”有关的词（比如“愉悦”）或“轻松”图片，请按“<span style="color:red;">j</span>”键。<br>如果你已经准备好了，请按“q”开始实验。</p>',
  choices: ['q'],
}

let trial_block7 = {
  type: jsPsychHtmlKeyboardResponse,
  timeline: [
    { stimulus: '<p style="font-size:50px; color:red; font-weight:bold;">+</p>', choices: 'NO_KEYS', trial_duration: 300 },
    { stimulus: jsPsych.timelineVariable('content'), prompt: '<p style="font-size:20px;color:grey;">“自我”相关或中性图片：按<span style="color:red;">"f"</span>键。<br>“他人”相关或压力图片：按<span style="color:red;">"j"</span>键。</p>', choices: ['f', 'j'], trial_duration: 3000 },
  ],
  timeline_variables: [
    { content: '<img src="./image/neutral_1.png">' },
    { content: '<img src="./image/neutral_2.png">' },
    { content: '<img src="./image/neutral_3.png">' },
    { content: '<img src="./image/neutral_4.png">' },
    { content: '<img src="./image/neutral_5.png">' },
    { content: '<img src="./image/neutral_6.png">' },
    { content: '<img src="./image/neutral_7.png">' },
    { content: '<img src="./image/stress_1.png">' },
    { content: '<img src="./image/stress_2.png">' },
    { content: '<img src="./image/stress_3.png">' },
    { content: '<img src="./image/stress_4.png">' },
    { content: '<img src="./image/stress_5.png">' },
    { content: '<img src="./image/stress_6.png">' },
    { content: '<img src="./image/stress_7.png">' },
    { content: '搔头抓耳' },
    { content: '搔头抓耳' },
    { content: '忧心如捣' },
    { content: '焦心' },
    { content: '焦灼' },
    { content: '镇定' },
    { content: '平静' },
    { content: '安详' },
    { content: '愉悦' },
    { content: '坦然' },
  ],
  randomize_order: true,
  on_finish: function () {
    console.log(jsPsych.data.get().values());
  }
};

/*人口学信息收集*/
let ending = {
  type: jsPsychHtmlButtonResponse,
  stimulus: '<p style="font-size:20px; font-weight:bold; color:black;line-height:30px"><div class="flex-container"><span style="color:red;font-size:30px;font-weight:bold">实验已经全部结束，感谢您的参与！</span></div><br>如果您有兴趣参与我们后续的实验，可以点击“下一页”填写您的基本信息和联系方式<br>最后，再次感谢您对本实验的支持！</p>',
  choices: ['下一页'],

};

let demographic1 = {
  type: jsPsychSurveyMultiChoice,
  questions: [
    {
      prompt: "1、你的性别是？",
      name: 'gender',
      options: ['男', '女'],
      required: true
    },
    {
      prompt: "2、你的学历层次是？",
      name: 'grade',
      options: ['本科生', '硕士研究生', '博士研究生'],
      required: true
    },
    {
      prompt: "3、请问您的学业成绩在您所在院系或专业的排名为？",
      name: 'GPA',
      options: ['名列前茅（前 10%）', '比较理想（前 10%-30%）', '还算满意（前 30%-50%）', '中等以下（后 50%）'],
      required: true
    }
  ],
  on_load: function (trial) {
    // 将CSS类应用到每个选项
    var items = document.querySelectorAll('.survey-multi-choice-item');
    items.forEach(function (item) {
      item.classList.add('survey-multi-choice-container');
    });
  },
  button_label: "下一页",
  on_finish: function () {
    console.log(jsPsych.data.get().values());
  }
};

let demographic2 = {
  type: jsPsychSurveyText,

  questions: [
    {
      prompt: "如果您有意愿参与后续实验，请留下您的联系方式（手机号）",
      name: 'telephone',
      placeholder: '198 xxxx xxxx',
      rows: 1,
      columns: 18,
      required: false
    },
    {
      prompt: "如果你对我们的实验有任何疑问或建议，请在下方填写反馈。",
      name: 'suggestion',
      placeholder: '本次实验过程中，我认为...',
      rows: 5,
      columns: 40,
      required: false
    }
  ],
  button_label: "提交",
  on_finish: function () {
    console.log(jsPsych.data.get().values());
  }
};


jsPsych.run([welcome, instruction1, trial_block1, instruction2, trial_block2, instruction3, trial_block3, instruction4, trial_block4, break1, instruction5, trial_block5, instruction6, trial_block6, instruction7, trial_block7, ending, demographic1, demographic2])
