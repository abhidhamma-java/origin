---
title: 문자열 내 p와 y의 개수
date: '2022-01-26'
tags: ['algorithm', 'string', 'programmers']
draft: false
summary: 문자열 내 p와 y의 개수
---

# **문자열 내 p와 y의 개수**

---

<TOCInline toc={props.toc} asDisclosure />

---

## 1.문제

![문자열 내 p와 y의 개수 이미지](/static/images/md-images/4b1ca7279f5c17a686b0c29255ecc9eadbe418facdfeb9575b3acf678af6d62e.png)

> **문제요약**  
> 문자열 내의 p와 y의 개수가
> 같으면 true를 다르면 false를 리턴한다

---

## 2.풀이방법

- p와 y의 개수를 카운트한뒤 비교한다.

---

## 3.코드

```java
class Solution {
    boolean solution(String s) {
        boolean answer = true;

        int pCount = 0;
        int yCount = 0;

        for(char c : s.toCharArray()) {
            if(c == 'p' || c == 'P') {
                pCount += 1;
            }
            if(c == 'y' || c == 'Y') {
                yCount += 1;
            }
        }

        if(pCount != yCount) {
            answer = false;
        } else {
            answer = true;
        }

        return answer;
    }
}
```

---

## 4.사용된 유형

- 문자열
  - [String을 각각 분리해서 Char로 바꾸기](https://github.com/abhidhamma-java/TIL/blob/main/algorithm/유형/문자열/String을_각각_분리해서_Char로_바꾸기.md)
