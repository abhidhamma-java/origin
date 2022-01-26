---
title: int와 char를 서로 변환하기
date: '2022-01-26'
tags: ['algorithm', 'string']
draft: false
summary: int와 char를 서로 변환하기
---

# int와 char를 서로 변환하기

---

1. char에서 int로 변환하기

```java
char c = 'a';
int i = Integer.parseInt(String.valueOf(c));
```

2. int에서 char로 변환하기

```java
int i = 97;
char c = (char)i; // a
```
