---
title: String 뒤집기
date: '2022-01-26'
tags: ['algorithm', 'string']
draft: false
summary: String 뒤집기
---

# String 뒤집기

```java
String s = "abcde";
String reverse = "";

for(int i = s.length() - 1; i >= 0; i--) {
  reverse += s.charAt(i);
}
```
