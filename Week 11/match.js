// 作业：编写一个match函数，接收两个参数，第一个参数是一个选择器字符串性质，第二个是一个HTML元素，判断当前的元素是否能够匹配到我们的选择器
/*
先产生一个元素集合，然后从后往前判断；

       浏览器先产生一个元素集合，这个集合往往由最后一个部分的索引产生（如果没有索引就是所有元素的集合）。然后向上匹配，如果不符合上一个部分，就把元素从集合中删除，直到真个选择器都匹配完，还在集合中的元素就匹配这个选择器了。
举个例子，有选择器：

body.ready #wrapper > .lol233
先把所有 class 中有 lol233 的元素拿出来组成一个集合，然后上一层，对每一个集合中的元素，如果元素的 parent id 不为 #wrapper 则把元素从集合中删去。 再向上，从这个元素的父元素开始向上找，没有找到一个 tagName 为 body 且 class 中有 ready 的元素，就把原来的元素从集合中删去。
至此这个选择器匹配结束，所有还在集合中的元素满足。大体就是这样，不过浏览器还会有一些奇怪的优化。
注意：

1、为什么从后往前匹配因为效率和文档流的解析方向。效率不必说，找元素的父亲和之前的兄弟比遍历所哟儿子快而且方便。关于文档流的解析方向，是因为现在的 CSS，一个元素只要确定了这个元素在文档流之前出现过的所有元素，就能确定他的匹配情况；应用在即使 html 没有载入完成，浏览器也能根据已经载入的这一部分信息完全确定出现过的元素的属性。

2、为什么是用集合主要也还是效率。基于 CSS Rule 数量远远小于元素数量的假设和索引的运用，遍历每一条 CSS Rule 通过集合筛选，比遍历每一个元素再遍历每一条 Rule 匹配要快得多。
*/

function match(selector, element) {
    let arr = selector.split(' ');
    let parentArr = [];
    let reg = /(\w+)|(\.\w+)|(\#\w+)/g;
    for (let i=0; i<arr.length; i++) {
        parentArr.push(arr[i].match(reg));
    }

    let matched = true;
    for (let j=parentArr.length-1; j>=0; j--) {
        if (!currentElementMatch(parentArr[j], element)) {
            matched = false;
            break;
        }
        element = element.parentNode;
    }
    return matched;
}

function currentElementMatch(currSelector, currElement) {
    let hasId = false, hasClass = false, hasTag = false;
    let idMatch = false, classMatch = false, tagMatch = false;
    for (let i=0; i<currSelector.length; i++) {
        if (currSelector[i].charAt(0) === '#') {
            hasId = true;
            if (currElement.id === currSelector[i].replace('#', '')) {
                idMatch = true;
            }
        } else if (currSelector[i].charAt(0) === '.') {
            hasClass = true;
            classMatch = false;
            for (let j=0; j<currElement.classList.length; j++) {
                if (currElement.classList[j] === currSelector[i].replace('.', '')) {
                    classMatch = true;
                    break;
                }
            }
        } else {
            hasTag = true;
            if (currElement.tagName.toLowerCase() === currSelector[i]) {
                tagMatch = true;
            }
        }        
    }
    return ((hasId && idMatch) || !hasId) && ((hasClass && classMatch) || !hasMatch) && ((hasTag && tagMatch) || !hasTag);
}

// match("div #id.class", document.getElementById("id"));
console.log(match("#id1.class1 div.class2.class3 div#id3.class4.class5.class6", document.getElementById("id3")));
console.log(match("div#id3.class4.class5.class6", document.getElementById("id3")));
console.log(match("div#id3.class4.class5 .class6", document.getElementById("id3")));

