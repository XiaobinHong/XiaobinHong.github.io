/* Edit this file to maintain the bilingual homepage content. */
window.PROFILE = {
  "name": {
    "zh": "洪晓斌",
    "en": "Xiaobin Hong"
  },
  "nameSecondary": {
    "zh": "Xiaobin Hong",
    "en": "洪晓斌"
  },
  "portrait": "./assets/portrait.png",
  "tagline": {
    "zh": "图学习 · 数据挖掘 · AI for Science",
    "en": "Graph learning · Data mining · AI for Science"
  },
  "affiliation": null,
  "email": null,
  "links": [
    {
      "label": "Google Scholar",
      "short": "GS",
      "url": "https://scholar.google.com/citations?user=p305PuwAAAAJ&hl=zh-CN"
    },
    {
      "label": "GitHub",
      "short": "GH",
      "url": "https://github.com/XiaobinHong"
    },
    {
      "label": "ORCID",
      "short": "iD",
      "url": "https://orcid.org/0000-0001-8019-0075"
    },
    {
      "label": "DBLP",
      "short": "DB",
      "url": "https://dblp.org/pid/20/5858-2"
    }
  ],
  "intro": {
    "zh": [
      "我的研究围绕图表示学习、时空数据分析与大模型展开，关注如何建模复杂数据中的结构关系，以及如何让学习到的知识在不同任务、领域和模型之间迁移。",
      "我的博士阶段研究在南京大学计算机科学与技术学院、新型软件技术全国重点实验室开展，导师为李文中教授。此前，我分别在南京理工大学和安徽大学完成硕士及本科学习，并曾赴香港科技大学（广州）交流。",
      "在图学习与数据挖掘的基础上，我也关注大模型推理、智能体协同，以及人工智能在生物科学中的应用。"
    ],
    "en": [
      "My research spans graph representation learning, spatiotemporal data analysis, and large language models. I study how to model structural relationships in complex data and transfer learned knowledge across tasks, domains, and model architectures.",
      "My doctoral research was conducted at the School of Computer Science and Technology and the State Key Laboratory for Novel Software Technology, Nanjing University, advised by Prof. Wenzhong Li. I previously studied at Nanjing University of Science and Technology and Anhui University, and visited the Hong Kong University of Science and Technology (Guangzhou).",
      "Building on graph learning and data mining, I am also interested in LLM reasoning, multi-agent coordination, and applications of AI in biological research."
    ]
  },
  "news": [
    {
      "date": "2026.10",
      "datetime": "2026-10",
      "paper": "MemPoison",
      "venue": "NeurIPS 2026",
      "kind": "accepted",
      "url": "https://arxiv.org/abs/2607.14651"
    },
    {
      "date": "2026.09",
      "datetime": "2026-09",
      "paper": "DEFT",
      "venue": "Pattern Recognition",
      "kind": "online",
      "url": "https://doi.org/10.1016/j.patcog.2026.115039"
    },
    {
      "date": "2026.04",
      "datetime": "2026-04",
      "paper": "EcoTune",
      "venue": "WWW 2026",
      "kind": "published",
      "url": "https://doi.org/10.1145/3774904.3792264"
    },
    {
      "date": "2026.03",
      "datetime": "2026-03",
      "paper": "DiP and L-MAP",
      "venue": "AAAI 2026",
      "kind": "published",
      "plural": true
    },
    {
      "date": "2026.02",
      "datetime": "2026-02",
      "paper": "WQ4TS",
      "venue": "ACM TKDD",
      "kind": "published",
      "url": "https://doi.org/10.1145/3788674"
    },
    {
      "date": "2025.04",
      "datetime": "2025-04",
      "paper": "AMEND",
      "venue": "IJCAI 2025",
      "kind": "accepted",
      "url": "https://www.ijcai.org/proceedings/2025/323"
    }
  ],
  "research": [
    {
      "number": "01",
      "title": {
        "zh": "图学习与时空数据挖掘",
        "en": "Graph & spatiotemporal learning"
      },
      "text": {
        "zh": "图表示学习、知识蒸馏与跨域泛化；多变量时间序列的预测与分类。",
        "en": "Graph representation learning, knowledge distillation, domain generalization, and multivariate time series forecasting and classification."
      },
      "tags": [
        "Graph neural networks",
        "Time series"
      ]
    },
    {
      "number": "02",
      "title": {
        "zh": "大模型与智能体",
        "en": "Large language models & agents"
      },
      "text": {
        "zh": "面向图计算的代码生成与推理，垂域模型微调、检索增强生成，以及多智能体协同。",
        "en": "Code generation and reasoning for graph problems, domain-specific fine-tuning, retrieval-augmented generation, and multi-agent coordination."
      },
      "tags": [
        "LLM reasoning",
        "Multi-agent systems"
      ]
    },
    {
      "number": "03",
      "title": {
        "zh": "AI for Science",
        "en": "AI for Science"
      },
      "text": {
        "zh": "探索图学习与大模型在生物科学中的应用，关注细胞图像、单细胞数据与细胞基础模型。",
        "en": "Exploring graph learning and foundation models for biological research, with interests in cell imaging, single-cell data, and cellular foundation models."
      },
      "tags": [
        "Single-cell analysis",
        "Foundation models"
      ]
    }
  ],
  "publications": [
    {
      "id": "mempoison",
      "year": 2026,
      "venue": "NeurIPS 2026",
      "category": [
        "llm"
      ],
      "title": "MemPoison: Uncovering Persistent Memory Threats and Structural Blind Spots in LLM Agents",
      "authors": [
        "Jifeng Gao",
        "Kang Xia",
        "Yi Zhang",
        "Xiaobin Hong",
        "Mingkai Lin",
        "Xingshen Wei",
        "Wenzhong Li",
        "Sanglu Lu"
      ],
      "equal": [],
      "image": "./assets/mempoison-framework.png",
      "summary": {
        "zh": "分析大语言模型智能体中的持续性记忆投毒与写入时防御的结构盲区。",
        "en": "A benchmark and analysis framework for persistent memory poisoning and structural blind spots in LLM agents."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://arxiv.org/abs/2607.14651"
        },
        {
          "label": "PDF",
          "url": "https://arxiv.org/pdf/2607.14651"
        }
      ],
      "doi": null
    },
    {
      "id": "deft",
      "year": 2026,
      "venue": "Pattern Recognition",
      "dateNote": {
        "zh": "2026 在线发表 · 2027 卷期",
        "en": "Online 2026 · Volume 2027"
      },
      "category": [
        "multimodal"
      ],
      "title": "A Dynamic Fusion Enhanced Trajectory Distillation Framework for Multi-view Classification",
      "authors": [
        "Hongyu Yao",
        "Binlu Chen",
        "Xiaobin Hong",
        "Yanchao Li",
        "Xiaoli Wang"
      ],
      "equal": [],
      "image": null,
      "summary": {
        "zh": "以标签语义引导动态多视图融合，并通过轨迹蒸馏传递判别性表示。",
        "en": "Dynamic multi-view fusion with label-guided semantic learning and trajectory distillation."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://doi.org/10.1016/j.patcog.2026.115039"
        },
        {
          "label": "Code",
          "url": "https://github.com/Hige6010/DEFT"
        }
      ],
      "doi": "10.1016/j.patcog.2026.115039"
    },
    {
      "id": "ecotune",
      "year": 2026,
      "venue": "WWW 2026",
      "category": [
        "llm"
      ],
      "title": "EcoTune: Edge-Cloud Collaborative Model Adaptation for Budget-Constrained On-Device SLM Personalization",
      "authors": [
        "Gong Chen",
        "Mingkai Lin",
        "Xiaobin Hong",
        "Wenzhong Li",
        "Sanglu Lu"
      ],
      "equal": [],
      "image": null,
      "summary": {
        "zh": "在标注与计算预算约束下开展端云协同的小语言模型个性化适配。",
        "en": "Budget-constrained edge-cloud adaptation for personalized on-device small language models."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://doi.org/10.1145/3774904.3792264"
        }
      ],
      "doi": "10.1145/3774904.3792264"
    },
    {
      "id": "lmap",
      "year": 2026,
      "venue": "AAAI 2026",
      "category": [
        "graph",
        "temporal"
      ],
      "title": "Learnable Matrix Profile for Motif Discovery on Multivariate Time Series",
      "authors": [
        "Mingkai Lin",
        "Yinke Wang",
        "Xiaobin Hong",
        "Wenzhong Li"
      ],
      "equal": [
        0,
        1
      ],
      "image": "./assets/lmap-framework.png",
      "summary": {
        "zh": "通过图表示与可学习多变量矩阵轮廓发现多变量时间序列中的重复模式。",
        "en": "A learnable multivariate matrix profile for motif discovery through graph representations and latent-space similarity."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://ojs.aaai.org/index.php/AAAI/article/view/38550"
        },
        {
          "label": "PDF",
          "url": "https://ojs.aaai.org/index.php/AAAI/article/download/38550/42512"
        }
      ],
      "doi": "10.1609/aaai.v40i18.38550"
    },
    {
      "id": "dip",
      "year": 2026,
      "venue": "AAAI 2026",
      "category": [
        "graph",
        "multimodal"
      ],
      "title": "Multimodal Graph Representation Learning with Dynamic Information Pathways",
      "authors": [
        "Xiaobin Hong",
        "Mingkai Lin",
        "Xiaoli Wang",
        "Chaoqun Wang",
        "Wenzhong Li"
      ],
      "equal": [],
      "image": "./assets/dip-framework.png",
      "summary": {
        "zh": "通过动态信息通路建模多模态图中的模态内交互与跨模态依赖。",
        "en": "Dynamic information pathways for adaptive message passing and cross-modal interaction in multimodal graphs."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://ojs.aaai.org/index.php/AAAI/article/view/38503"
        },
        {
          "label": "arXiv",
          "url": "https://arxiv.org/abs/2603.09258"
        },
        {
          "label": "Code",
          "url": "https://github.com/XiaobinHong/DiP"
        }
      ],
      "doi": null
    },
    {
      "id": "wq4ts",
      "year": 2026,
      "venue": "ACM TKDD",
      "category": [
        "temporal"
      ],
      "title": "A Wave Is Worth 100 Words: Investigating Cross-Domain Transferability in Time Series",
      "authors": [
        "Xiangkai Ma",
        "Xiaobin Hong",
        "Wenzhong Li",
        "Sanglu Lu"
      ],
      "equal": [
        0,
        1
      ],
      "image": "./assets/wq4ts-framework.png",
      "summary": {
        "zh": "利用波形量化与共享频谱空间开展跨域、多任务时间序列迁移。",
        "en": "Wave quantization in a shared spectral latent space for cross-domain time series transfer."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://doi.org/10.1145/3788674"
        },
        {
          "label": "arXiv",
          "url": "https://arxiv.org/abs/2412.00772"
        }
      ],
      "doi": "10.1145/3788674"
    },
    {
      "id": "amend",
      "year": 2025,
      "venue": "IJCAI 2025",
      "category": [
        "graph"
      ],
      "title": "Aggregation Mechanism Based Graph Heterogeneous Networks Distillation",
      "authors": [
        "Xiaobin Hong",
        "Mingkai Lin",
        "Xiangkai Ma",
        "Wenzhong Li",
        "Sanglu Lu"
      ],
      "equal": [],
      "image": "./assets/amend.png",
      "summary": {
        "zh": "保留图神经网络的聚合范围与模式，将结构知识迁移到轻量化 MLP。",
        "en": "Preserving aggregation scope and patterns when transferring knowledge from GNNs to lightweight MLPs."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://www.ijcai.org/proceedings/2025/323"
        },
        {
          "label": "PDF",
          "url": "https://www.ijcai.org/proceedings/2025/0323.pdf"
        }
      ],
      "doi": "10.24963/ijcai.2025/323"
    },
    {
      "id": "gcoder",
      "year": 2025,
      "venue": "CIKM 2025",
      "category": [
        "llm",
        "graph"
      ],
      "title": "GCoder: Improving Large Language Model for Generalized Graph Reasoning",
      "authors": [
        "Qifan Zhang",
        "Xiaobin Hong",
        "Jianheng Tang",
        "Nuo Chen",
        "Yuhan Li",
        "Wenzhong Li",
        "Jing Tang",
        "Jia Li"
      ],
      "equal": [
        0,
        1,
        2
      ],
      "image": "./assets/gcoder.png",
      "summary": {
        "zh": "利用可执行代码增强大语言模型在图计算任务中的推理与泛化能力。",
        "en": "Using executable code to improve large language models for generalized graph reasoning."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://doi.org/10.1145/3746252.3761066"
        },
        {
          "label": "arXiv",
          "url": "https://arxiv.org/abs/2410.19084"
        }
      ],
      "doi": "10.1145/3746252.3761066"
    },
    {
      "id": "stfusion",
      "year": 2025,
      "venue": "ICRA 2025",
      "category": [
        "temporal"
      ],
      "title": "Semantic-Supervised Spatial-Temporal Fusion for LiDAR-based 3D Object Detection",
      "authors": [
        "Chaoqun Wang",
        "Xiaobin Hong",
        "Wenzhong Li",
        "Ruimao Zhang"
      ],
      "equal": [
        0,
        1
      ],
      "image": "./assets/stfusion.png",
      "summary": {
        "zh": "结合时空融合与语义监督，改善稀疏 LiDAR 点云中的三维目标检测。",
        "en": "Spatial-temporal fusion and semantic supervision for 3D detection from sparse LiDAR point clouds."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://arxiv.org/abs/2503.10579"
        }
      ],
      "doi": null
    },
    {
      "id": "magnet",
      "year": 2025,
      "venue": "TKDD",
      "dateNote": {
        "zh": "2024 在线发表 · 2025 卷期",
        "en": "Online 2024 · Volume 2025"
      },
      "category": [
        "graph",
        "temporal"
      ],
      "title": "MagNet: Multilevel Dynamic Wavelet Graph Neural Network for Multivariate Time Series Classification",
      "authors": [
        "Xiaobin Hong",
        "Jiangyi Hu",
        "Taishan Xu",
        "Xiancheng Ren",
        "Feng Wu",
        "Xiangkai Ma",
        "Wenzhong Li"
      ],
      "equal": [],
      "image": null,
      "summary": {
        "zh": "联合多级小波分解与动态图学习，建模多变量时间序列的时频依赖。",
        "en": "Multilevel wavelet analysis and dynamic graph learning for multivariate time series classification."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://doi.org/10.1145/3703915"
        }
      ],
      "doi": "10.1145/3703915"
    },
    {
      "id": "ladgnn",
      "year": 2024,
      "venue": "AAAI 2024",
      "category": [
        "graph"
      ],
      "title": "Label Attentive Distillation for GNN-Based Graph Classification",
      "authors": [
        "Xiaobin Hong",
        "Wenzhong Li",
        "Chaoqun Wang",
        "Mingkai Lin",
        "Sanglu Lu"
      ],
      "equal": [],
      "image": "./assets/ladgnn-framework.png",
      "summary": {
        "zh": "将标签感知表征作为蒸馏监督，改善面向图分类的节点表示学习。",
        "en": "Label-attentive distillation for learning node representations suited to graph-level classification."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://ojs.aaai.org/index.php/AAAI/article/view/28693"
        }
      ],
      "doi": "10.1609/aaai.v38i8.28693"
    },
    {
      "id": "ts3net",
      "year": 2024,
      "venue": "ICDE 2024",
      "category": [
        "temporal"
      ],
      "title": "TS3Net: Triple Decomposition with Spectrum Gradient for Long-Term Time Series Analysis",
      "authors": [
        "Xiangkai Ma",
        "Xiaobin Hong",
        "Sanglu Lu",
        "Wenzhong Li"
      ],
      "equal": [
        0,
        1
      ],
      "image": "./assets/ts3net.png",
      "summary": {
        "zh": "利用频谱梯度分离趋势、规则周期和动态波动，开展长序列分析。",
        "en": "Spectrum-gradient-based triple decomposition for long-term time series analysis."
      },
      "links": [
        {
          "label": "Paper",
          "url": "https://doi.org/10.1109/ICDE60146.2024.00073"
        },
        {
          "label": "Code",
          "url": "https://github.com/Xiang-Kai/TS3Net"
        }
      ],
      "doi": "10.1109/ICDE60146.2024.00073"
    }
  ],
  "projects": [
    {
      "title": {
        "zh": "电力机器人的多模态理解与动作生成",
        "en": "Multimodal understanding & robot action generation"
      },
      "text": {
        "zh": "围绕多模态图表示、检索增强生成与模型微调，研究复杂作业场景中的语义理解及指令到动作的转换。",
        "en": "Multimodal graph representations, retrieval-augmented generation, and model fine-tuning for scene understanding and instruction-to-action generation in power robotics."
      },
      "tags": [
        "Multimodal learning",
        "RAG"
      ]
    },
    {
      "title": {
        "zh": "跨域时间序列建模",
        "en": "Cross-domain time series modeling"
      },
      "text": {
        "zh": "研究跨场景、跨工况的时间序列迁移与预测，探索统一表示与领域适应机制。",
        "en": "Transfer and forecasting across scenarios and operating conditions, with a focus on shared representations and domain adaptation."
      },
      "tags": [
        "Time series",
        "Transfer learning"
      ]
    },
    {
      "title": {
        "zh": "图模型的知识迁移与轻量化",
        "en": "Knowledge transfer & efficient graph models"
      },
      "text": {
        "zh": "将图神经网络中的结构知识迁移到轻量模型，关注异构架构下的表示对齐与高效推理。",
        "en": "Transferring structural knowledge from GNNs to lightweight models through representation alignment across heterogeneous architectures."
      },
      "tags": [
        "Knowledge distillation",
        "Efficient inference"
      ]
    }
  ],
  "education": [
    {
      "dates": "2022.09 — 2026.06",
      "school": {
        "zh": "南京大学",
        "en": "Nanjing University"
      },
      "degree": {
        "zh": "计算机科学与技术 · 博士",
        "en": "Ph.D. in Computer Science and Technology"
      },
      "detail": {
        "zh": "导师：李文中教授",
        "en": "Advisor: Prof. Wenzhong Li"
      }
    },
    {
      "dates": "2024.07 — 2025.02",
      "school": {
        "zh": "香港科技大学（广州）",
        "en": "HKUST (Guangzhou)"
      },
      "degree": {
        "zh": "数据科学与分析学域 · 博士交流",
        "en": "Visiting Ph.D. student · Data Science and Analytics"
      },
      "detail": {
        "zh": "信息枢纽",
        "en": "Information Hub"
      }
    },
    {
      "dates": "2018.09 — 2021.03",
      "school": {
        "zh": "南京理工大学",
        "en": "Nanjing University of Science and Technology"
      },
      "degree": {
        "zh": "计算机应用技术 · 硕士",
        "en": "Master’s in Computer Application Technology"
      },
      "detail": {
        "zh": "计算机学院",
        "en": "School of Computer Science and Engineering"
      }
    },
    {
      "dates": "2014.09 — 2018.06",
      "school": {
        "zh": "安徽大学",
        "en": "Anhui University"
      },
      "degree": {
        "zh": "计算机科学与技术 · 学士",
        "en": "Bachelor’s in Computer Science and Technology"
      },
      "detail": {
        "zh": "计算机科学与技术学院",
        "en": "School of Computer Science and Technology"
      }
    }
  ],
  "awards": [
    {
      "year": "2026",
      "title": {
        "zh": "优秀毕业生",
        "en": "Outstanding Graduate"
      },
      "org": {
        "zh": "南京大学",
        "en": "Nanjing University"
      }
    },
    {
      "year": "2025",
      "title": {
        "zh": "燕宝专项奖学金",
        "en": "Yanbao Scholarship"
      },
      "org": {
        "zh": "南京大学",
        "en": "Nanjing University"
      }
    },
    {
      "year": "2024",
      "title": {
        "zh": "华为奖学金",
        "en": "Huawei Scholarship"
      },
      "org": {
        "zh": "南京大学",
        "en": "Nanjing University"
      }
    },
    {
      "year": "2023",
      "title": {
        "zh": "“大湾区”杯 AI for Science 科技竞赛 · 二等奖",
        "en": "Second Prize · Greater Bay Area AI for Science Competition"
      },
      "org": {
        "zh": "广东数学学会",
        "en": "Guangdong Mathematical Society"
      }
    },
    {
      "year": "2021",
      "title": {
        "zh": "优秀硕士学位论文",
        "en": "Outstanding Master’s Thesis Award"
      },
      "org": {
        "zh": "江苏省计算机学会",
        "en": "Jiangsu Computer Society"
      }
    }
  ]
};
