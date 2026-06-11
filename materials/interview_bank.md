# Interview Question Bank — Emma Sun

> **原则：** 入库即存档原文，不修改。有打磨答案的标注 ✅，待准备的标注 ⚠️。

---

## Group 1 · 自我介绍 / Walk Me Through Your Resume

**核心问题：** Tell me about yourself. / Walk me through your background.

**变体：**
- Why did you become a PM?
- What's your PM story?

**推荐素材：** Commure / JPM / SocGen 工作经历 + Georgia Tech 读 CS 的原因

**答案状态：** ⚠️ 待打磨

---

## Group 2 · 为什么转行 / Why PM, Why AI PM

**核心问题：** Why do you want to be a product manager?

**变体：**
- Why AI PM specifically?
- Why are you interested in this role?

**推荐素材：** JPM 兼任研究员+PM 的独特经历；Commure 启发了 CS 学习的动机

**答案状态：** ⚠️ 待打磨

---

## Group 3 · 最高压的工作经历 / High-Pressure / Ambiguity

**核心问题：** Tell me about the most high-pressure experience in your work.

**变体：**
- Tell me about a time you worked under extreme ambiguity.
- Tell me about a time when things were chaotic and you had to make decisions without full information.

**✅ 已打磨答案（Commure dashboarding 场景）：**

> The most high-pressure experience at Commure was a different kind of pressure than what I knew from finance.
>
> In trading, pressure is intense but legible — market moves, you react, P&L tells you immediately if you're right. At Commure, the pressure was structural: high personnel turnover, shifting priorities, and chronic information gaps. You had to move fast without a clear map.
>
> The clearest example was when a key client came to us with an urgent dashboarding request and a hard deadline. The tricky part was that no single team owned it — ops could do it manually, product could build it properly, but eng had a packed backlog and this wasn't their top priority. So I had three paths, no obvious answer, and a deadline.
>
> My approach was to reframe the problem. Instead of asking "who builds this," I asked "what does the client actually need to not churn right now." The answer was: something functional, not something perfect.
>
> So I pulled together a Looker-based solution — ops handled some manual adjustments, but it was enough. The client accepted it, hit the deadline, and didn't churn. And there was an unexpected upside: the Looker UI we built essentially became a working prototype — it de-risked eng's eventual build and effectively pre-answered half the PRD questions.
>
> What I learned about navigating this kind of pressure is that the chaos is manageable if you've done the work upfront — knowing who does what internally, and understanding what the client actually cares about versus what they're asking for. That gap between "want" and "need" is where most of the leverage is.
>
> And honestly, this experience also surfaced a real gap for me — I could navigate the product and ops side, but I didn't have enough technical depth to push back or prototype on the eng side. That's a big part of why I decided to go back for CS.

---

## Group 4 · 数据驱动决策 / Data-Driven Decision Making

**核心问题：** Tell me about a time you used data to make a product decision.

**变体：**
- Tell me about a time you had to define success metrics from scratch.
- Describe a time you used data to convince stakeholders.

**推荐素材：**
- Commure：定义客户健康度 KPI，识别 churn 信号
- JPM：Feed 功能的 DAU 数据；定义 ground truth 标准
- SocGen：用用户访谈数据 + 数据分析推出批量交易功能

**答案状态：** ⚠️ 待打磨

---

## Group 5 · 跨职能协作 / Working with Engineering & Design

**核心问题：** Tell me about a time you worked closely with engineering (or design, or data science) to ship something.

**变体：**
- How do you work with technical teams?
- Describe a time you had to influence without authority.
- Tell me about a time you worked with eng/design/data to upgrade a user experience.

**✅ 已打磨答案 Q1（JPM Audio Pipeline，与 Eng 合作）：**

> When I proposed the Fedspeak audio-to-signal pipeline at JPMorgan, I was still early in my technical learning curve. I knew what I wanted the product to do, but I didn't yet have the depth to specify how.
>
> What I did have was a clear problem statement: analysts were manually transcribing and labeling Fed speeches to extract trading signals, and I was one of them. I'd been doing it long enough to know exactly what mattered — what words, what context, what framing changed the interpretation. That domain expertise was the input engineering needed.
>
> My job became translating qualitative analyst judgment into labeling logic engineers could build against. I wrote up the decision rules I used when reading a speech — not as code, but as a structured spec with examples and edge cases. Then I stayed in the loop as they built: reviewing outputs, flagging when the pipeline missed something that would have been obvious to a human reader, and explaining why.
>
> The result was a pipeline that improved LLM fine-tuning precision by 30%. But what I take from it is the model: the PM's job isn't to know how to build — it's to be the clearest possible source of ground truth about what "good" looks like. The closer you can get to that, the faster the engineering team can move.

**✅ 已打磨答案 Q2（ChatGeneT，用 Claude Code 做 prototype）：**

> While creating ChatGeneT, a patient simulation software tool being used in more than 30 hospitals, I used Claude Code to create prototype designs of a clinical data dashboard. These types of features heavily relied on visual assessment, but historically product designers have to spend a lot of time on mockups. In my opinion, there were many possible designs of the visualizations, layout and colors that were difficult to assess purely theoretically, and, therefore, I made several prototypes on my own and presented them to the team members. The ability to show the working prototype instead of a simple static design completely transformed our discussion since we could assess something tangible and allows us to move fast on actual MVPs rather than mockups.

---

## Group 6 · 产品感觉 / Product Intuition & Metrics

**核心问题：** How do you define success for a product?

**变体：**
- Walk me through how you would set up metrics for [X product].
- How do you think about leading vs. lagging indicators?

**推荐素材：**
- Commure：动态基准法定义 billing KPI（拒赔率 vs 行业基准 vs 历史数据）
- JPM：DAU 15x；Feed 功能投票排名第一

**答案状态：** ⚠️ 待打磨

---

## Group 7 · AI 产品观 / AI Product Philosophy

**核心问题：** How do you think about building trust in AI products?

**变体：**
- What makes a good AI product?
- How do you handle hallucinations / AI errors in production?
- Where do you want to be in 5 years?

**推荐素材：**
- Beige Book 论文（LLM 评估视角）
- Commure medical AI（信任 & human-in-the-loop）
- ChatGeneT（hallucination 控制，0.31% hallucination rate）

**答案状态：** ⚠️ 待打磨

---

## Group 8 · 为什么离开 / Why Leaving / Why This Company

**核心问题：** Why are you leaving your current role?

**变体：**
- Why do you want to work at [company]?
- What are you looking for in your next role?

**✅ 已打磨答案（Why leaving / What I'm looking for）：**

> What I'm looking for is a role where the product actually has to work. Not "good enough for a demo," but reliable enough that a doctor, a trader, or an engineer would stake something real on it.
>
> At Commure, I got a taste of what that means in healthcare — the margin for error is different when the output affects a patient record or a billing decision. At JPMorgan, it was the same with financial signals. The products that mattered had to be trustworthy, not just impressive.
>
> I went back to school partly because I wanted to close the gap between what I could specify and what I could actually build. I've been doing that. Now I want to bring both together in a role where the technical depth makes a real difference in what gets shipped.

**✅ 已打磨答案（Why Meta，通用框架）：**

> What draws me to [company] is the scale at which you can get feedback. In most places, you iterate slowly — you ship, you wait weeks for data, you adjust. At [company], the feedback loop is compressed in a way that makes you a better PM faster.
>
> My background is in domains where the cost of being wrong is high — healthcare AI, financial signals. Those taught me to be precise about what "working" means before you ship. I think that kind of rigor is actually additive at scale, not redundant with it. That's the combination I want to work in.

---

## Group 9 · Most Proud Of / 0-to-1 Build

**核心问题：** Please describe a product you helped build that you are most proud of.

**变体：**
- Tell me about your most impactful project.
- What's your best example of building something from 0 to 1?

**✅ 已打磨答案（ChatGeneT）：**

> We built an AI that could simulate realistic, unpredictable patient interactions to give junior doctors higher-quality practice before they work with real patients.
>
> What I'm most proud of isn't just the outcome, it's the quality bar we set for the AI itself. In a medical training context, hallucinations aren't just a product failure, they're a patient safety risk. I worked with the ML team to design a verification layer that caught a particularly dangerous failure mode: the model citing sources that existed but didn't match the referenced content. That process, human review revealing patterns feeding back into prompt design, is how we got to a 0.31% hallucination rate.
>
> The product launched with a CSAT of 4.5/5 and became a daily tool for 500+ junior doctors across 30+ hospitals.

---

## Group 10 · 技术 / Working with ML Teams

**核心问题：** How do you work with machine learning or data science teams?

**变体：**
- Tell me about a time you had to make a build vs. buy decision for an AI component.
- How do you evaluate model performance from a product perspective?
- Describe a time you defined ground truth or annotation standards.

**✅ 已打磨答案（JPM Unstructured Data Project）：**

> In regards to the ML foundations component, my collaboration with the ML engineer and researcher on the creation of the golden dataset was crucial. Together we decided what labels should be used, how we measure signal quality, and how we will be evaluating the performance of the model. The metrics that we decided on were Accuracy, Precision, Recall, and the F1 score. In addition to those metrics, we also conducted a manual 10% spot check of the data set to obtain the satisfaction score. I was in charge of defining the ground truth in order to keep the standards and the entire team in line.
>
> The pivotal point in time where I had to make a decision happened when it became evident that the development of our most important feature was going to require much more time than we initially expected. Instead of postponing everything until we have the final product ready, I decided to release the intermediate version in order to keep the ball rolling.
>
> For discovery work, I wasn't making educated guesses about what needed to be built. I conducted user research, tracking which pieces of content the analysts engaged with most heavily — this let me know definitively which signals were absolutely required. From a UI standpoint, I ran A/B tests and found that feed-based content was far more comfortable than anything else. Finally, I deliberately constrained the first version of my KPIs, focusing solely on accuracy and speed of information delivery rather than signal generation.
>
> After launch, the product became must-read content for 80% of active users. What stood out to me most was the engagement pattern — users were actively subscribing and leaving comments requesting specific features. In traditional finance, that kind of unsolicited feedback almost never happens. It told me we had built something people genuinely needed, not just another internal tool they tolerated.
>
> The pipeline ultimately improved LLM fine-tuning precision by 30% and generated $5M in new revenue.

---

## Group 11 · 应对失败 / Failure / Mistake

**核心问题：** Tell me about a time you failed or made a mistake.

**变体：**
- What's your biggest product regret?
- Tell me about a time a product you shipped didn't work out.

**答案状态：** ⚠️ 待打磨

---

## Group 12 · 产品喜欢 / Product You Love

**核心问题：** What's a product you love and why? If you were its PM, what would you change and how would you measure the impact?

**答案状态：** ⚠️ 待打磨（需要选一个你真正用过的产品）

---

## 快速素材索引

| 素材 | 适用题型 |
|------|---------|
| ChatGeneT（hallucination 0.31%，CSAT 4.5/5，500+ 医生） | Most proud of / AI产品观 / 0-to-1 |
| JPM Audio Pipeline（$5M，微调精度+30%） | 与Eng合作 / 数据驱动 / 0-to-1 |
| JPM Feed（DAU 15x，投票第一） | 用户研究 / 数据驱动 |
| JPM Unstructured Data（交易量+30%，利润+45%） | ML协作 / 地面真值定义 |
| Commure Churn（-50%，$2M） | 数据驱动 / 高压场景 / 跨职能 |
| Commure Dashboarding（Looker快速交付） | 高压/模糊场景 |
| SocGen SDP（用户+300%，flow+170%，利润+120%） | 用户研究 / 功能上线 |
| SocGen ECN/API（销售+30%） | 跨职能 / 项目管理 |
| Beige Book（F1 0.89，ACM ICAIF '25 Oral） | AI产品观 / ML协作 |
