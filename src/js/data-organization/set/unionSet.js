/**
 * 并查集 union set
 */

// quick-find 算法
class UnionSetQuickFind {
    constructor(n) {
      this.color = [];
      for(let i = 0; i <= n; i++){
        this.color[i] = i; 
      }

    }
    // 查找对应的颜色
    find(x) {
      return this.color[x]
    }
    // 合并
    merge(a, b){
        if(this.color[a] === this.color[b]) return;
        const cb = this.color[b];
        for(let i = 0; i <= n; i++){
            if(this.color[i] === cb)
            this.color[i] = this.color[a]; 
          }
    } 
}
// quick-union 算法
class UnionSetQuickUnion {
    constructor(n) {
      // 树形结构根节点存储
      this.boss = [];
      for(let i = 0; i <= n; i++){
        this.boss[i] = i; 
      }
    }
    // 查找根节点
    find(x) {
        if(this.boss[x] === x) return x;
      return this.find(this.boss[x]);
    }
    merge(a, b){
        let fa = this.find(a), fb = this.find(b);
        if(fa === fb) return;
        this.boss[fa] = fb;
    } 
}

// quick union 优化

//  1.节点数量少的 当子节点
class UnionSetQuickUnion {
    constructor(n) {
      // 树形结构根节点存储
      this.boss = [];
      this.size = []
      for(let i = 0; i <= n; i++){
        this.boss[i] = i; 
        this.size[i] = 1;
      }
    }
    // 查找根节点
    find(x) {
      if(this.boss[x] === x) return x;
      return this.find(this.boss[x]);
    }
    merge(a, b){
        let fa = this.find(a), fb = this.find(b);
        if(fa === fb) return;
        let sa = this.size[fa], sb = this.size[fb]
        if(sa < sb){
          this.boss[fa] = fb;
          this.size[fb] += this.size[fa];
        } else {
          this.boss[fb] = fa;
          this.size[fa] += this.size[fb];
        }
        
    } 
}

// 2.路径压缩（最常用）
class UnionSetQuickUnion {
    constructor(n) {
      // 树形结构根节点存储
      this.boss = [];
      for(let i = 0; i <= n; i++){
        this.boss[i] = i; 
      }
    }
    // 查找根节点
    find(x) {
      if(this.boss[x] === x) return x;
      const  root = this.find(this.boss[x]);
      fa[x] = root;
      return root;
    }
    merge(a, b){
        let fa = this.find(a), fb = this.find(b);
        if(fa === fb) return;
        this.boss[fb] = fa; 
    } 
}