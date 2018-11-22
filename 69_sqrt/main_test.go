package leetcode

import "testing"

func Test_mySqrt(t *testing.T) {
	type args struct {
		x int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "t1",
			args: args{x: 1},
			want: 1,
		},

		{
			name: "t1",
			args: args{x: 4},
			want: 2,
		},

		{
			name: "t2",
			args: args{x: 8},
			want: 2,
		},

		{
			name: "t3",
			args: args{x: 10},
			want: 3,
		},

		{
			name: "t4",
			args: args{x: 10000},
			want: 100,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := mySqrt(tt.args.x); got != tt.want {
				t.Errorf("mySqrt() = %v, want %v", got, tt.want)
			}
		})
	}
}

func Benchmark_Add(b *testing.B) {
	type args struct {
		x int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{
			name: "t1",
			args: args{x: 1},
			want: 1,
		},

		{
			name: "t2",
			args: args{x: 4},
			want: 2,
		},

		{
			name: "t3",
			args: args{x: 8},
			want: 2,
		},

		{
			name: "t4",
			args: args{x: 10},
			want: 3,
		},

		{
			name: "t5",
			args: args{x: 10000},
			want: 100,
		},
	}

	for _, tt := range tests {
		for i := 0; i < b.N; i++ {
			if got := mySqrt2(tt.args.x); got != tt.want {
				b.Errorf("mySqrt() = %v, want %v", got, tt.want)
			}
		}
	}
}
